<template>
    <div class="main table-list">
        <!-- search -->
        <div class="filter-form-box">
            <div class="inner cf">
                <div class="input-wrapper">
                    <label for="" class="title">学科</label>
                    <div class="input-box">
                        <select class="subject-select-box" id="subject-select-box" name="subject-select-box" title="请选择学科" v-model="subjectValue" data-options="width: 100">
                            <option value="">全部</option>
                            <option v-for="option in optionsSubject" v-bind:value="option.subjectId">
                                {{ option.subjectName }}
                            </option>
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
                    <label for="" class="title">上传时间</label>
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
                    <label for="" class="title">状态</label>
                    <div class="input-box">
                        <select class="status-select-box" id="status-select-box" name="status-select-box" data-options="width: 100">
                            <option value="1">待审核</option>
                            <option value="2">已通过</option>
                            <option value="3">退回</option>
                            <option value="4">试卷重复</option>
                        </select>
                    </div>
                </div>
                <div class="input-wrapper">
                    <label for="" class="title">机构</label>
                    <div class="input-box">
                        <select class="mechanism-select-box" id="mechanism-select-box" name="mechanism-select-box" data-options="width: 100" data-live-search="true">
                            <option value="0">全部</option>
                            <option v-for="option in optionsAgency" v-bind:value="option.agencyId">
                                {{ option.agencyName }}
                            </option>
                        </select>
                    </div>
                </div>
                <button type="button" name="button" class="list-search-btn">搜索</button>
            </div>
        </div>
        <!-- list -->
        <div class="pic-list-wrapper">
            <div class="pic-number-wrapper">
                <span class="info-n sum">共<span class="num">100</span>套</span>
                <span class="info-n vertify">待审核<span class="num yellow">40</span>套</span>
                <span class="info-n right">已通过<span class="num green">52</span>套</span>
                <span class="info-n pass">退回<span class="num red">5</span>套</span>
                <span class="info-n like">试卷重复<span class="num red">3</span>套</span>
                <div class="search-wrapper">
                    <input type="text" class="s-input" value="" placeholder="试卷名称">
                    <span class="search-btn"></span>
                </div>
            </div>
            <div class="pic-form-wrapper">
                <table id="pic-form-box" class="pic-form-box"></table>
                <div id="paginationBox" class="m-pages"></div>
            </div>
        </div>
    </div>
</template>

<script>
    //

    import "../../static/js/jquery.common.js"
    import "../../static/js/jquery.dataTables.min.js"
    import "../../static/css/jquery.dataTables.min.css"
    import "../../static/js/pagination/pagination.css"
    import "../../static/js/datetimepicker/jquery.datetimepicker.full.js"
    import "../../static/js/pagination/pagination.min.js"


    import {mapGetters} from 'vuex'
    export default {
        data(){
            return {
                subjectValue:'',
                optionsSubject:'',
                agencyValue:'',
                optionsAgency:'',
                imagePaperList: [],
                pageSize: 15,
                currentPage:1,
                curGrade:'',
                _total:0,
                recordCount: 0,
            }
        },
        watch:{
            searchArgs:function() {
                var that = this;
                that.currentPage = 1;
            },
            imagePaperList:function(){
                var that = this;
                that.jsPage();
            }
        },
        computed: {
            searchArgs: function () {
                var that = this;
                return {

                    grade: that.curGrade,
                    subjectId: that.subjectValue,
                    pageSize:that.pageSize
                };
            },
            ...mapGetters({
                userKey:'getUserKey'            //this.userKey  ==  this.$store.getters.getUserKey
            })
        },
        mounted(){
            var that = this;
            that.subjectList();
            that.agencyList();
            that.doSearch();


        },
        methods:{
            agencyList(){
                var that = this;
                axios.get('common/common/getYoudaoAgency',{params:{userKey:that.userKey}}).then(function(data){
                    if (data.data.errorMsg) {
                        that.$message.error(data.data.errorMsg);
                    } else {
                        that.optionsAgency = data.data;
                    }

                })
            },
            subjectList(){
                //alert(1)
                var that = this;
                axios.get('common/common/getSubjects',{params:{userKey:that.userKey}}).then(function(data){
                    if (data.data.errorMsg) {
                        that.$message.error(data.data.errorMsg);
                    } else {
                        that.optionsSubject = data.data;
                    }

                })
            },
            jsPage:function(){
                var that = this;
                if($("#pagination_4").html() != '') {
                    $("#pagination_4").pagination('setPage', that.currentPage, that._total);
                } else {
                    $("#pagination_4").pagination({
                        // pageSizeOpt: [
                        //     {'value': 15, 'text': '15条/页', 'selected': true},
                        //     {'value': 30, 'text': '30条/页'},
                        //     {'value': 45, 'text': '45条/页'},
                        //     {'value': 60, 'text': '60条/页'}
                        // ],
                        //totalPage:sessionStorage.getItem("key1"),
                        totalPage: that._total,
                        showPageNum: 5,
                        callBack: function (currPage, pageSize) {
                            that.currentPage = currPage;
                            that.pageSize = pageSize;
                            that.doSearch();
                            console.log('currPage:' + currPage + 'pageSize:' + pageSize);
                        }
                    });
                }
            },
            doSearch(){
                var that = this;
                var searchArgs = $.extend(true, {}, that.searchArgs);
                searchArgs.currentPage = that.currentPage;
                searchArgs.pageSize = that.pageSize;
                $.post('youdao/imagePaper/imagePaper', searchArgs, function (data) {
                    if (data.errorMsg) {
                        alert(data.errorMsg);
                    } else {
                        that.$nextTick(function () {

                            that.imagePaperList = data.rows;
                            that.recordCount = data.recordCount;
                            that._total = data.pageCount;

                        });
                    }
                }, 'json').error(function () {
                    load.hide(loadId);
                    //alert('出错了！');
                })

                $('#pic-form-box').DataTable({
                    // ordering: false,
                    searching: false,
                    // lengthChange: false,
                    paging: false,
                    info: false,
                    columnDefs: [
                        {
                            title: "任务ID",name: "1_id",data: "id",targets: 0,width: "6%",orderable: false, orderData: [0]
                        },
                        {
                            title: "试卷名称", name: "2_title", data: "title", targets: 1,
                            render: function(data) {
                                return "<span class='color-black'>"+ data +"</span>";
                            },
                            orderable: false, width: "37%", orderData: [1],
                        },
                        {
                            title:"机构名称", name:"3_jgName", data:"jgName", targets: 2,
                            render: function(data) {
                                if(data.length > 25) {
                                    data = data.substring(0,25) + "...";
                                }
                                return data;
                            },
                            width:"22%", orderable:false, orderData:[2]
                        },
                        {
                            title:"上传时间", name:"4_uploadTime", data:"uploadTime", targets: 3,
                            width:"10%", orderable:true, orderData:[4],
                        },
                        {
                            title:"审核时间", name:"5_reviewTime", data:"reviewTime", targets: 4,
                            width:"10%", orderable:true, orderData:[5],
                        },
                        {
                            title:"审核状态", name:"6_reviewStatus", data:"reviewStatus", targets: 5,
                            render: function( data, type, full, meta){
                                var className = '';
                                if(data == '已通过'){ className = 'green' }
                                if(data == '退回'){ className = 'red' }
                                return '<span class="status '+ className +'">'+ data +'</span>'
                            },
                            width:"8%", orderable:true, orderData:[6],
                        },
                        {
                            title:"操作",name:"7_option",data:"option",targets: 6,
                            render: function( data, type, full, meta){
                                var str = '';
                                if(data == 'true'){ str = '<a href="reviewPic1.html" class="reviewBtn">审核</a>' }
                                return str
                            },
                            width:"8%",orderable:false,orderData:[7],
                        }
                    ],
                    language: {
                        paginate: {
                            previous: '上一页',
                            next: '下一页',
                            first: '第一页',
                            last: '末页'
                        }
                    },
                    ajax: function( data, callback, settings ) {
                        if( !$('#pic-form-box').data('callback') ) {
                            $('#pic-form-box').data('callback', callback);
                            // $('#pic-form-box').data('callback')( data  );
                        }
                        callback( {
                            data: [
                                {
                                    'id':'1',
                                    'title': '套卷VIP-初中-数学-初三-上学期-其他',
                                    'jgName':'高思教育',
                                    'uploadTime':'12-16 12:40',
                                    'reviewTime' : '12-18 11:20',
                                    'reviewStatus' : '已通过',
                                    'option' : 'false'
                                },
                                {
                                    'id':'2',
                                    'title': '套卷VIP-初中-数学-初三-上学期-其他-第三章圆的基本性质培基本性质基质基本优',
                                    'jgName':'北京高思教育科技有限有有限公司',
                                    'uploadTime':'12-16 12:40',
                                    'reviewTime' : '12-18 11:20',
                                    'reviewStatus' : '退回',
                                    'option' : 'false'
                                },
                                {
                                    'id':'3',
                                    'title': '套卷VIP-初中-数学-初三-上学期-其他-第三章圆的基本性质培基本性质基质基本优',
                                    'jgName':'高思教育',
                                    'uploadTime':'12-16 12:40',
                                    'reviewTime' : '12-18 11:20',
                                    'reviewStatus' : '试卷重复',
                                    'option' : 'false'
                                },
                                {
                                    'id':'3',
                                    'title': '套卷VIP-初中-数学-初三-上学期-其他-第三章圆的基本性质培基本性质基质基本优',
                                    'jgName':'高思教育',
                                    'uploadTime':'12-16 12:40',
                                    'reviewTime' : '12-18 11:20',
                                    'reviewStatus' : '待审核',
                                    'option' : 'true'
                                },
                            ]
                        } );
                    }
                });
                $("#paginationBox").pagination({
                    totalPage: 100,
                    showPageNum: 5,
                    isShowPageSizeOpt: false,
                    isShowFL: false,
                    isShowRefresh: false,
                    callBack: function (currPage, pageSize) {
                        console.log('currPage:' + currPage + '     pageSize:' + pageSize);
                    }
                });
            }
        }
    }
</script>

