<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model as BaseModel;
use Illuminate\Support\Facades\DB;

class Model extends BaseModel
{
    /**
     * 查询所有数据
     * @param $db
     * @param array $condition
     * @param string $order
     * @param string $field
     * @return mixed
     */
    public function findAll($condition=[],$order=[],$field=["*"],$group="",$join=[],$page=null,$pageSize=20)
    {
        //获取条件
        $db=self::getCondition($this,$condition);
        $db=self::getOrderBy($db,$order);       //排序
        $db=self::getJoin($db,$join);           //连接
        $db=self::getGroupBy($db,$group);       //分组
        $db=$db->select($field);
        if(isset($page) && !empty($page))
        {
            $result=$db->paginate($pageSize,['*'],'page',$page)->toArray();
        }else{
            $result=$db->get()->toArray();
        }
        return $result;
    }

    /**
     * 返回指定条数
     * @param array $condition
     * @param array $order
     * @param array $field
     * @param int $pageSize
     */
    public function findLimit($condition=[],$order=[],$field=["*"],$group="",$join=[],$pageSize=20)
    {
        //获取条件
        $db=self::getCondition($this,$condition);
        $db=self::getOrderBy($db,$order);
        $db=self::getJoin($db,$join);           //连接
        $db=self::getGroupBy($db,$group);       //分组
        $result=$db->select($field)->limit($pageSize)->get();
        return $result;
    }

    /**
     * 查询一条数据
     * @param array $condition
     * @param array $order
     * @param string $field
     */
    public function findOne($condition=[],$order=[],$field=["*"],$group="",$join=[])
    {
        $db=self::getCondition($this,$condition);
        $db=self::getOrderBy($db,$order);
        $db=self::getJoin($db,$join);           //连接
        $db=self::getGroupBy($db,$group);       //分组
        return $db->select($field)->first();
    }

    /**
     * 统计条数
     * @param array $condition
     * @return mixed
     */
    public function count($condition=[],$join=[])
    {
        $db=self::getCondition($this,$condition);
        $db=self::getJoin($db,$join);
        return $db->count();
    }
    /**
     * 分组统计条数
     * @param array $condition
     * @return mixed
     */
    public function groupCount($condition=[],$order=[],$field=["*"],$group="",$join=[],$having=false)
    {
        $db=self::getCondition($this,$condition);
        $db=self::getOrderBy($db,$order);
        $db=self::getJoin($db,$join);
        $db=self::getGroupBy($db,$group);       //分组
        array_push($field,DB::connection($this->connection)->raw('count(*) as total'));
        $db->select($field);
        if($having){
            $db->havingRaw($having);
        }
        return $db->get()->toArray();
    }
    /**
     * 求和
     * @param array $condition
     * @return mixed
     */
    public function sum($condition=[],$join=[])
    {
        $db=self::getCondition($this,$condition);
        $db=self::getJoin($db,$join);
        return $db->sum();
    }

    /**
     * 插入数据，返回id
     * @param $data
     * @return mixed
     */
    public function add($data)
    {
        return $this->insertGetId($data);
    }

    /**
     * 更新数据
     * @param $data
     * @param array $condition
     * @return mixed
     */
    public function edit($data,$condition=[])
    {
        $db=self::getCondition($this,$condition);
        return $db->update($data);
    }

    /**
     * 删除数据
     * @param array $conditoon
     * @return bool|null
     */
    public function delete($conditoon=[])
    {
        $db=self::getCondition($this,$conditoon);
        return $db->delete();
    }

    /**
     * 自增
     * @param string $field
     * @param int $num
     * @return int|mixed
     */
    public function incr($field,$num=null)
    {
        if(!isset($num) || empty($num)){
            return $this->increment($field);
        }
        return $this->increment($field,$num);
    }

    /**
     * 自减
     * @param string $field
     * @param int $num
     * @return int|mixed
     */
    public function decr($field,$num=null)
    {
        if(!isset($num) || empty($num)){
           return $this->decrement($field);
        }
        return $this->decrement($field,$num);
    }

    /**
     * 批量添加
     * @param $data
     * @return bool
     */
    public function batchAdd($data)
    {
        if(!is_array($data))return false;
        $this->beginTransaction();
        foreach($data as $key => $val)
        {
            $result=$this->add($val);
            if($result === false)
            {
                $this->rollBack();
                return false;
            }
        }
        $this->commit();
        return true;
    }

    /**
     * 获取查询条件
     * @param array $condition
     * @return array
     */
    protected static function getCondition($obj,$condition=array()){
        //判断条件是否是数组
        if(!empty($condition) && is_array($condition))
        {
            foreach($condition as $key => $val)
            {
                //判断值是否是数组
                if(!empty($val) && is_array($val))
                {
                    foreach($val as $k => $v)
                    {
                        $kword=strtolower($k);
                        switch ($kword)
                        {
                            case "gt":
                                $obj=$obj->where($key,'>',$v);
                                break;
                            case "egt":
                                $obj=$obj->where($key,'>=',$v);
                                break;
                            case "lt":
                                $obj=$obj->where($key,'<',$v);
                                break;
                            case "elt":
                                $obj=$obj->where($key,'<=',$v);
                                break;
                            case "eq":
                                $obj=$obj->where($key,'=',$v);
                                break;
                            case "neq":
                                $obj=$obj->where($key,'<>',$v);
                                break;
                            case "or":
                                $obj=$obj->orWhere($key,$v);
                                break;
                            case "between":
                                $obj=$obj->whereBetween($key,$v);
                                break;
                            case "not between":
                                $obj=$obj->whereNotBetween($key,$v);
                            case "in":
                                $obj=$obj->whereIn($key,$v);
                                break;
                            case "not in":
                                $obj=$obj->whereNotIn($key,$v);
                                break;
                            case "not null":
                                $obj=$obj->whereNotNull($v);
                                break;
                            case "null":
                                $obj=$obj->whereNull($v);
                                break;
                            case "sub":
                                $obj=self::getSubWhere($obj,$key,$v);           //带条件的子查询
                                break;
                            case "like":
                                $obj=$obj->where($key,'like',$v);
                                break;
                        }
                    }
                }else {
                    //如果不是数组，循环多个条件
                    $obj=$obj->where($key,'=',$val);
                }
            }
        }else{
            $obj=$obj->where($condition);
        }
        return $obj;
    }

    /**
     * 获取排序
     * @param $obj
     * @param $order
     * @return mixed
     */
    protected static function getOrderBy($obj,$order)
    {
        if(!empty($order) && is_array($order))
        {
            foreach($order as $key => $val)
            {
                $obj=$obj->orderBy($key,$val);
            }
        }
        return $obj;
    }

    /**
     * 分组排序
     * @param $obj
     * @param $group
     * @return mixed
     */
    protected static function getGroupBy($obj,$group)
    {
        if(!empty($group) && is_array($group))
        {
            foreach($group as $key => $val)
            {
                $obj=$obj->groupBy($val);
            }
        }else if(!empty($group) && is_string($group)){
            $obj=$obj->groupBy($group);
        }
        return $obj;
    }

    /**
     * 子查询
     * @param $obj
     * @param $condition
     */
    protected static function getSubWhere($obj,$key=null,$val)
    {
        //如果key是否为空
        if(!empty($key))
        {
            if(!empty($val) && is_array($val))
            {
                $obj->where($key,function($query)use($val){
                    $query->from($val['table']);
                    if(!empty($val['where']) && is_array($val['where']))
                    {
                        foreach($val['where'] as $key => $val)
                        {
                            $query->where($key,'=',$val);
                        }
                    }
                    if(!empty($val['select']))
                    {
                        $query->select($val['select']);
                    }
                });
            }
        }
        return $obj;
    }

    /**
     * 连接
     * @param $db
     * @param $where
     * @return bool
     */
    protected static function getJoin($obj,$where)
    {
        if(!empty($where) && is_array($where))
        {
            foreach($where as $key => $val)
            {
                switch($val['type'])
                {
                    case "inner":
                            $obj=$obj->join($val['table'],function($join) use ($val){
                                foreach($val['on'] as $k => $v)
                                {
                                    $join->on($k,'=',$v);
                                }
                                if(isset($val['where']) && !empty($val['where']))
                                {
                                    self::getJoinWhere($val['where'],$join);
                                }
                            });
                        break;
                    case "left":
                            $obj = $obj->join($val['table'], function ($join) use ($val) {
                                foreach($val['on'] as $k => $v)
                                {
                                    $join->on($k,'=',$v);
                                }
                                if(isset($val['where']) && !empty($val['where']))
                                {
                                    self::getJoinWhere($val['where'],$join);
                                }
                            }, null, null, 'left');
                        break;
                    case "right":
                            $obj = $obj->join($val['table'], function ($join) use ($val) {
                                foreach($val['on'] as $k => $v)
                                {
                                    $join->on($k,'=',$v);
                                }
                                if(isset($val['where']) && !empty($val['where']))
                                {
                                    self::getJoinWhere($val['where'],$join);
                                }
                            }, null, null, 'right');
                        break;
                    default:
                            $obj = $obj->join($val['table'], function ($join) use ($val) {
                                foreach($val['on'] as $k => $v)
                                {
                                    $join->on($k,'=',$v);
                                }
                                if(isset($val['where']) && !empty($val['where']))
                                {
                                    self::getJoinWhere($val['where'],$join);
                                }
                            });
                        break;
                }
            }
        }
        return $obj;
    }

    /**
     * 返回关联查询条件
     * @param $where
     * @param $join
     * @return mixed
     */
    protected static function getJoinWhere($where,$join)
    {
        foreach($where as $key => $val)
        {
            $join->where($key,'=',$val);
        }
        return $join;
    }

    /**
     * 开启查询
     * @param $sql
     * @return mixed
     */
    public function beginQueryLog()
    {
        DB::connection($this->connection)->enableQueryLog();  // 开启QueryLog

    }

    /**
     * 获取查询
     */
    public function getQueryLog()
    {
        dump(DB::connection($this->connection)->getQueryLog());exit;
    }

    /**
     * 开启事务
     */
    public function beginTransaction()
    {
        DB::connection($this->connection)->beginTransaction();
    }

    //回滚
    public function rollback()
    {
        DB::connection($this->connection)->rollback();
    }

    //提交事务
    public function commit()
    {
        DB::connection($this->connection)->commit();
    }
}
