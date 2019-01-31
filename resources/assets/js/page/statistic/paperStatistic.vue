<template>
    <div class="main table-list">
        <!-- search -->
        <div class="filter-form-box">
          <div class="inner cf">
              <div class="input-wrapper">
                  <label for="" class="title">学科</label>
                  <div class="input-box">
                      <select class="subject-select-box" id="subject-select-box" name="subject-select-box" data-options="width: 100">
                          <option value="0">全部</option>
                          <option value="1">语文</option>
                          <option value="2">英语</option>
                          <option value="3">几何</option>
                          <option value="4">政治</option>
                      </select>
                  </div>
              </div>
              <div class="input-wrapper">
                  <label for="" class="title">年级</label>
                  <div class="input-box">
                      <select class="grade-select-box" id="grade-select-box" name="grade-select-box" data-options="width: 100">
                          <option value="0">全部</option>
                          <option value="1">小学</option>
                          <option value="2">初中</option>
                          <option value="3">高中</option>
                      </select>
                  </div>
              </div>
              <div class="input-wrapper">
                  <label for="" class="title">省市</label>
                  <div class="input-box">
                      <div class="address-search-box">
                          <div class="city-select cf">
                              <input class="value prov-name" type="text" placeholder="省" readonly="readonly">
                              <input class="value city-name" type="text" placeholder="市" readonly="readonly">
                          </div>
                          <div class="drop-down">
                              <div class="drop-prov">
                                  <ul class="drop-prov-ul drop-ul"></ul>
                              </div>
                              <div class="drop-city">
                                  <ul class="drop-city-ul drop-ul"></ul>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div class="input-wrapper">
                  <label for="" class="title">最终审核试卷</label>
                  <div class="input-box">
                      <div class="date-range-box">
                          <input type="hidden" name="">
                      </div>
                      <div class="input-inner">
                          <input type="text" class="input-text input-date-range" readonly="readonly">
                      </div>
                  </div>
              </div>
              <div class="input-wrapper">
                  <label for="" class="title">试卷审核人</label>
                  <div class="input-box">
                      <select class="status-select-box" id="status-select-box" name="status-select-box" data-options="width: 100">
                          <option value="0">全部</option>
                          <option value="1">张新乐</option>
                          <option value="2">刘佳</option>
                          <option value="3">陈紫曦</option>
                      </select>
                  </div>
              </div>
              <div class="input-wrapper">
                  <label for="" class="title">机构</label>
                  <div class="input-box">
                      <select class="mechanism-select-box" id="mechanism-select-box" name="mechanism-select-box" data-options="width: 100" data-live-search="true">
                          <option value="0">全部</option>
                          <option value="1">机构1</option>
                          <option value="2">机构2</option>
                          <option value="3">机构3</option>
                      </select>
                  </div>
              </div>
              <button type="button" name="button" class="list-search-btn">搜索</button>
          </div>
        </div>
        <!-- list -->
        <div class="pic-list-wrapper statistic-paper">
          <div class="pic-number-wrapper">
            <span class="info-n sum">共<span class="num">100</span>套</span>
            <div class="tool-box">
              <div class="search-wrapper">
                <input type="text" class="s-input" value="" placeholder="试卷名称">
                <span class="search-btn"></span>
              </div>
              <button type="button" name="button" class="export-btn">导出试题</button>
              <button type="button" name="button" class="export-btn">导出试卷</button>
            </div>
          </div>
          <div class="pic-form-wrapper">
            <table id="pic-form-box" class="pic-form-box"></table>
            <div id="paginationBox" class="m-pages"></div>
            <!-- 审核流程 -->
            <div class="review-process-wrapper js-process">
              <h3 class="title">审核流程</h3>
              <div class="process-list">
                <table class="table">
                  <thead>
                    <tr>
                      <th class="w9">序号</th>
                      <th class="w24">处理步骤</th>
                      <th class="w35">处理时间</th>
                      <th class="w13">处理人</th>
                      <th class="w13">状态</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="tr-row">
                      <td>1</td>
                      <td>上传图片</td>
                      <td>2018-11-17 14:56</td>
                      <td>蒲公英</td>
                      <td></td>
                    </tr>
                    <tr class="tr-row">
                      <td>2</td>
                      <td>审核图片</td>
                      <td>2018-11-17 14:56</td>
                      <td>王琴</td>
                      <td class="status yes">通过</td>
                    </tr>
                    <tr class="tr-row">
                      <td>3</td>
                      <td>第一次有道接收</td>
                      <td>2018-11-17 14:56</td>
                      <td>有道</td>
                      <td></td>
                    </tr>
                    <tr class="tr-row">
                      <td>4</td>
                      <td>第一次审核试题</td>
                      <td>2018-11-17 14:56</td>
                      <td>菜花</td>
                      <td class="status no">退回</td>
                    </tr>
                    <tr class="tr-row">
                      <td>4</td>
                      <td>第一次审核试题</td>
                      <td>2018-11-17 14:56</td>
                      <td>菜花</td>
                      <td class="status no">退回</td>
                    </tr>
                    <tr class="tr-row">
                      <td>4</td>
                      <td>第一次审核试题</td>
                      <td>2018-11-17 14:56</td>
                      <td>菜花</td>
                      <td class="status no">退回</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <!-- 遮罩 -->
        <div class="dialog-balck-cover"></div>
        <!-- 试卷详情 -->
        <div class="dialog-paper-detial-wrapper">
          <h2 class="title">初中数学</h2>
          <p class="question-type">一、单选题（共2题，共10分）</p>
          <dl class="question-wrapper q-radio">
              <dt class="question-name">1、下列事件中最适合使用普查方式收集数据的是（  ）</dt>
              <dd class="option">A.了解某班同学的体重情况</dd>
              <dd class="option"> B.了解我省初中学生的兴趣爱好情况</dd>
              <dd class="option"> C.了解我省初中学生的兴趣爱好情况 </dd>
              <dd class="option"> D.了解我省农民工的年收入情况</dd>
           </dl>
           <dl class="question-wrapper">
               <dt class="question-name">2、下列事件中最适合使用普查方式收集数据的是（  ）</dt>
               <dd class="option">A.了解某班同学的体重情况</dd>
               <dd class="option"> B.了解我省初中学生的兴趣爱好情况</dd>
               <dd class="option"> C.了解我省初中学生的兴趣爱好情况 </dd>
               <dd class="option"> D.了解我省农民工的年收入情况</dd>
           </dl>
          <p class="question-type">二、解答题（共2题，共10分）</p>
          <div class="question-wrapper q-answer">
            <p class="q-answer-con">
              1、 我市某中学决定在学生中开展丢沙包、打篮球、跳大绳和踢毽球四种项目的活动，为了解学生对四种项目的喜欢情况，随机调查了
                    必选且只能选择四种活动项目的一种），并将调查结果绘制成如下的不完整的统计图表：学生最喜欢的活动项目的人数统计表根图
                  <br/>（1）m＝________，n＝________，p＝________；
                  <br/>（2）请根据以上信息直接补全条形统计图；
                  <br/>（3）根据抽样调查结果，请你估计该校2000名学生中有多少名学生最喜欢跳大绳．
            </p>
          </div>
          <p class="question-type">二、填空题（共2题，共10分）</p>
          <div class="question-wrapper q-answer">
            <p class="q-answer-con mb">
              1、 且只能选择四种活动项目的一种），并将调查结果绘制成如下的不完整的统计图表：解答下列问题：
            </p>
            <p class="q-answer-con mb">
              2、 且只能选择四种活动项目的一种），并将调查结果绘制成如下的不完整的统计图表：解答下列问题：
            </p>
          </div>
        </div>
    </div>
</template>
<script>
    import "../../static/js/jquery-1.12.2.min.js"
    import "../../static/js/jquery.plugin.js"
    import common from "../../static/js/jquery.common.js"
    import {mapGetters} from 'vuex'

    export default {
            data(){
                return {

                }
            },
            computed: {
                searchArgs: function () {
                    var that = this;
                    return {

                    };
                },
                ...mapGetters({
                    userKey:'getUserKey',
                })
            },
            mounted(){
                var that = this;

            },
            watch:{

            },
            methods:{

            }
        }
</script>
