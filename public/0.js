webpackJsonp([0],{

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__static_js_jquery_common_js__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__static_js_jquery_common_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__static_js_jquery_common_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__static_js_jquery_dataTables_min_js__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__static_js_jquery_dataTables_min_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__static_js_jquery_dataTables_min_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__static_css_jquery_dataTables_min_css__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__static_css_jquery_dataTables_min_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__static_css_jquery_dataTables_min_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__static_js_pagination_pagination_css__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__static_js_pagination_pagination_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__static_js_pagination_pagination_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__static_js_datetimepicker_jquery_datetimepicker_full_js__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__static_js_datetimepicker_jquery_datetimepicker_full_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__static_js_datetimepicker_jquery_datetimepicker_full_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__static_js_pagination_pagination_min_js__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__static_js_pagination_pagination_min_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__static_js_pagination_pagination_min_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_vuex__ = __webpack_require__(14);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

//









/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            subjectValue: '',
            optionsSubject: '',
            agencyValue: '',
            optionsAgency: '',
            imagePaperList: [],
            pageSize: 15,
            currentPage: 1,
            curGrade: '',
            _total: 0,
            recordCount: 0
        };
    },

    watch: {
        searchArgs: function searchArgs() {
            var that = this;
            that.currentPage = 1;
        },
        imagePaperList: function imagePaperList() {
            var that = this;
            that.jsPage();
        }
    },
    computed: _extends({
        searchArgs: function searchArgs() {
            var that = this;
            return {

                grade: that.curGrade,
                subjectId: that.subjectValue,
                pageSize: that.pageSize
            };
        }
    }, __WEBPACK_IMPORTED_MODULE_6_vuex__["b" /* mapGetters */]({
        userKey: 'getUserKey' //this.userKey  ==  this.$store.getters.getUserKey
    })),
    mounted: function mounted() {
        var that = this;
        that.subjectList();
        that.agencyList();
        that.doSearch();
    },

    methods: {
        agencyList: function agencyList() {
            var that = this;
            axios.get('common/common/getYoudaoAgency', { params: { userKey: that.userKey } }).then(function (data) {
                if (data.data.errorMsg) {
                    that.$message.error(data.data.errorMsg);
                } else {
                    that.optionsAgency = data.data;
                }
            });
        },
        subjectList: function subjectList() {
            //alert(1)
            var that = this;
            axios.get('common/common/getSubjects', { params: { userKey: that.userKey } }).then(function (data) {
                if (data.data.errorMsg) {
                    that.$message.error(data.data.errorMsg);
                } else {
                    that.optionsSubject = data.data;
                }
            });
        },

        jsPage: function jsPage() {
            var that = this;
            if ($("#pagination_4").html() != '') {
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
                    callBack: function callBack(currPage, pageSize) {
                        that.currentPage = currPage;
                        that.pageSize = pageSize;
                        that.doSearch();
                        console.log('currPage:' + currPage + 'pageSize:' + pageSize);
                    }
                });
            }
        },
        doSearch: function doSearch() {
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
            });

            $('#pic-form-box').DataTable({
                // ordering: false,
                searching: false,
                // lengthChange: false,
                paging: false,
                info: false,
                columnDefs: [{
                    title: "任务ID", name: "1_id", data: "id", targets: 0, width: "6%", orderable: false, orderData: [0]
                }, {
                    title: "试卷名称", name: "2_title", data: "title", targets: 1,
                    render: function render(data) {
                        return "<span class='color-black'>" + data + "</span>";
                    },
                    orderable: false, width: "37%", orderData: [1]
                }, {
                    title: "机构名称", name: "3_jgName", data: "jgName", targets: 2,
                    render: function render(data) {
                        if (data.length > 25) {
                            data = data.substring(0, 25) + "...";
                        }
                        return data;
                    },
                    width: "22%", orderable: false, orderData: [2]
                }, {
                    title: "上传时间", name: "4_uploadTime", data: "uploadTime", targets: 3,
                    width: "10%", orderable: true, orderData: [4]
                }, {
                    title: "审核时间", name: "5_reviewTime", data: "reviewTime", targets: 4,
                    width: "10%", orderable: true, orderData: [5]
                }, {
                    title: "审核状态", name: "6_reviewStatus", data: "reviewStatus", targets: 5,
                    render: function render(data, type, full, meta) {
                        var className = '';
                        if (data == '已通过') {
                            className = 'green';
                        }
                        if (data == '退回') {
                            className = 'red';
                        }
                        return '<span class="status ' + className + '">' + data + '</span>';
                    },
                    width: "8%", orderable: true, orderData: [6]
                }, {
                    title: "操作", name: "7_option", data: "option", targets: 6,
                    render: function render(data, type, full, meta) {
                        var str = '';
                        if (data == 'true') {
                            str = '<a href="reviewPic1.html" class="reviewBtn">审核</a>';
                        }
                        return str;
                    },
                    width: "8%", orderable: false, orderData: [7]
                }],
                language: {
                    paginate: {
                        previous: '上一页',
                        next: '下一页',
                        first: '第一页',
                        last: '末页'
                    }
                },
                ajax: function ajax(data, callback, settings) {
                    if (!$('#pic-form-box').data('callback')) {
                        $('#pic-form-box').data('callback', callback);
                        // $('#pic-form-box').data('callback')( data  );
                    }
                    callback({
                        data: [{
                            'id': '1',
                            'title': '套卷VIP-初中-数学-初三-上学期-其他',
                            'jgName': '高思教育',
                            'uploadTime': '12-16 12:40',
                            'reviewTime': '12-18 11:20',
                            'reviewStatus': '已通过',
                            'option': 'false'
                        }, {
                            'id': '2',
                            'title': '套卷VIP-初中-数学-初三-上学期-其他-第三章圆的基本性质培基本性质基质基本优',
                            'jgName': '北京高思教育科技有限有有限公司',
                            'uploadTime': '12-16 12:40',
                            'reviewTime': '12-18 11:20',
                            'reviewStatus': '退回',
                            'option': 'false'
                        }, {
                            'id': '3',
                            'title': '套卷VIP-初中-数学-初三-上学期-其他-第三章圆的基本性质培基本性质基质基本优',
                            'jgName': '高思教育',
                            'uploadTime': '12-16 12:40',
                            'reviewTime': '12-18 11:20',
                            'reviewStatus': '试卷重复',
                            'option': 'false'
                        }, {
                            'id': '3',
                            'title': '套卷VIP-初中-数学-初三-上学期-其他-第三章圆的基本性质培基本性质基质基本优',
                            'jgName': '高思教育',
                            'uploadTime': '12-16 12:40',
                            'reviewTime': '12-18 11:20',
                            'reviewStatus': '待审核',
                            'option': 'true'
                        }]
                    });
                }
            });
            $("#paginationBox").pagination({
                totalPage: 100,
                showPageNum: 5,
                isShowPageSizeOpt: false,
                isShowFL: false,
                isShowRefresh: false,
                callBack: function callBack(currPage, pageSize) {
                    console.log('currPage:' + currPage + '     pageSize:' + pageSize);
                }
            });
        }
    }
});

/***/ }),

/***/ 197:
/***/ (function(module, exports) {

(function (global, $, factory) {
	factory(global, $);
})(this, jQuery, function (window, $) {

	var siteFns = {
		init: function init() {
			var self = this;
			self.componentInit().addressPicker.init();
		},

		componentInit: function componentInit() {
			var self = this;
			if ($('select').length) {
				initSelectBox();
				$('select').each(function () {
					var $this = $(this),
					    obj = $(this).data('options');
					if (obj) {
						obj = obj.charAt(0) === '{' && obj.charAt(obj.length - 1) === '}' ? stf(obj) : stf('{' + obj + '}');
					} else {
						obj = {};
					}
					$this.selectpicker(obj);
				});
			}
			if ($('.input-date-range')) {
				$('.input-date-range').each(function () {
					var $this = $(this),
					    options = {
						autoUpdateInput: false,
						locale: {
							applyLabel: '确定',
							cancelLabel: '取消',
							fromLabel: '起始时间',
							toLabel: '结束时间',
							daysOfWeek: ["日", "一", "二", "三", "四", "五", "六"],
							monthNames: ["01月", "02月", "03月", "04月", "05月", "06月", "07月", "08月", "09月", "10月", "11月", "12月"],
							firstDay: 1,
							format: 'YYYY/DD/MM'
						}
					};
					// if( $this. ) {
					//
					// }
					$this.after('<input type="hidden" name="start-date" /><input type="hidden" name="end-date" />');
					$this.daterangepicker(options, function (start, end, label) {
						$this.parent().prev().addClass('has-content');
						start = start.format('YYYY/DD/MM');
						end = end.format('YYYY/DD/MM');
						$this.val(start + ' - ' + end);
						$this.nextAll().eq(0).val(start).end().eq(1).val(end);
					});

					if ($this.val()) {
						$this.parent().prev().addClass('has-content');
					}
				});
			}
			return self;
		},
		addressPicker: {
			init: function init() {
				var self = this,
				    provs = ["北京", "天津", "上海", "重庆", "河北", "山西", "内蒙古", "辽宁", "吉林", "黑龙江", "江苏", "浙江", "安徽", "福建", "江西", "山东", "河南", "湖北", "湖南", "广东", "广西", "海南", "四川", "贵州", "云南", "西藏", "陕西", "甘肃", "青海", "宁夏", "新疆", "香港", "澳门", "台湾"],
				    citys = [["北京"], ["天津"], ["上海"], ["重庆"], ["石家庄", "张家口", "承德", "秦皇岛", "唐山", "廊坊", "保定", "衡水", "沧州", "邢台", "邯郸"], ["太原", "朔州", "大同", "阳泉", "长治", "晋城", "忻州", "晋中", "临汾", "吕梁", "运城"], ["呼和浩特", "包头", "乌海", "赤峰", "通辽", "呼伦贝尔", "鄂尔多斯", "乌兰察布", "巴彦淖尔", "兴安盟", "锡林郭勒盟", "阿拉善盟"], ["沈阳", "朝阳", "阜新", "铁岭", "抚顺", "本溪", "辽阳", "鞍山", "丹东", "大连", "营口", "盘锦", "锦州", "葫芦岛"], ["长春", "白城", "松原", "吉林", "四平", "辽源", "通化", "白山", "延边州"], ["哈尔滨", "齐齐哈尔", "七台河", "黑河", "大庆", "鹤岗", "伊春", "佳木斯", "双鸭山", "鸡西", "牡丹江", "绥化", "大兴安岭"], ["南京", "徐州", "连云港", "宿迁", "淮安", "盐城", "扬州", "泰州", "南通", "镇江", "常州", "无锡", "苏州"], ["杭州", "湖州", "嘉兴", "舟山", "宁波", "绍兴", "衢州", "金华", "台州", "温州", "丽水"], ["合肥", "宿州", "淮北", "亳州", "阜阳", "蚌埠", "淮南", "滁州", "马鞍山", "芜湖", "铜陵", "安庆", "黄山", "六安", "巢湖", "池州", "宣城"], ["福州", "南平", "莆田", "三明", "泉州", "厦门", "漳州", "龙岩", "宁德"], ["南昌", "九江", "景德镇", "鹰潭", "新余", "萍乡", "赣州", "上饶", "抚州", "宜春", "吉安"], ["济南", "青岛", "聊城", "德州", "东营", "淄博", "潍坊", "烟台", "威海", "日照", "临沂", "枣庄", "济宁", "泰安", "莱芜", "滨州", "菏泽"], ["郑州", "开封", "三门峡", "洛阳", "焦作", "新乡", "鹤壁", "安阳", "濮阳", "商丘", "许昌", "漯河", "平顶山", "南阳", "信阳", "周口", "驻马店", "济源"], ["武汉", "十堰", "襄阳", "荆门", "孝感", "黄冈", "鄂州", "黄石", "咸宁", "荆州", "宜昌", "随州", "仙桃", "潜江", "天门", "神农架林区", "恩施州"], ["长沙", "张家界", "常德", "益阳", "岳阳", "株洲", "湘潭", "衡阳", "郴州", "永州", "邵阳", "怀化", "娄底", "湘西州"], ["广州", "深圳", "清远", "韶关", "河源", "梅州", "潮州", "汕头", "揭阳", "汕尾", "惠州", "东莞", "珠海", "中山", "江门", "佛山", "肇庆", "云浮", "阳江", "茂名", "湛江"], ["南宁", "桂林", "柳州", "梧州", "贵港", "玉林", "钦州", "北海", "防城港", "崇左", "百色", "河池", "来宾", "贺州"], ["海口", "三亚", "文昌", "琼海", "万宁", "五指山", "东方", "儋州", "三沙"], ["成都", "广元", "绵阳", "德阳", "南充", "广安", "遂宁", "内江", "乐山", "自贡", "泸州", "宜宾", "攀枝花", "巴中", "达州", "资阳", "眉山", "雅安", "阿坝州", "甘孜州", "凉山州"], ["贵阳", "六盘水", "遵义", "安顺", "毕节", "铜仁", "黔东南州", "黔南州", "黔西南州"], ["昆明", "曲靖", "玉溪", "保山", "昭通", "丽江", "思茅", "临沧", "德宏州", "怒江州", "迪庆州", "大理州", "楚雄州", "红河州", "文山州", "西双版纳"], ["拉萨", "那曲", "昌都", "林芝", "山南", "日喀则", "阿里"], ["西安", "延安", "铜川", "渭南", "咸阳", "宝鸡", "汉中", "榆林", "安康", "商洛"], ["兰州", "嘉峪关", "白银", "天水", "武威", "酒泉", "张掖", "庆阳", "平凉", "定西", "陇南", "临夏州", "甘南州"], ["西宁", "海东", "海北州", "海南州", "黄南州", "果洛州", "玉树州", "海西州"], ["银川", "石嘴山", "吴忠", "固原", "中卫"], ["乌鲁木齐", "克拉玛依", "喀什", "阿克苏", "和田", "吐鲁番", "哈密", "克孜勒苏柯州", "博尔塔拉州", "昌吉州", "巴音郭楞州", "伊犁州", "塔城", "阿勒泰"], ["香港"], ["澳门"], ["台北", "高雄", "台中", "花莲", "基隆", "嘉义", "金门", "连江", "苗栗", "南投", "澎湖", "屏东", "台东", "台南", "桃园", "新竹", "宜兰", "云林", "彰化"]];

				self.provs = provs;
				self.citys = citys;
				self.render().eventInit();
			},
			render: function render() {
				var self = this;

				$('.city-select').each(function () {
					var $this = $(this),
					    html = '',
					    name,
					    val;

					$this.prepend('<input name="search-prov" type="hidden" /><input name="search-city" type="hidden" />');

					$.each(self.provs, function (i, prov) {
						prov = ~prov.indexOf('-') ? prov.split('-') : [prov, i + 1];
						name = prov[0];
						val = prov[1];

						html += '<li class="drop-prov-li" data-val="' + val + '">' + name + '</li>';
					});

					$this.next().find('.drop-prov-ul').append(html);

					$this.next().find('.drop-prov-ul li').each(function (i) {
						html = '';

						$.each(self.citys[i], function (i, city) {

							city = ~city.indexOf('-') ? city.split('-') : [city, i + 1];
							name = city[0];
							val = city[1];

							html += '<li class="drop-city-li" data-val="' + val + '">' + name + '</li>';
						});

						$(this).data('citys', html);

						if (!i) {
							$this.next().find('.drop-city-ul').html(html);
						}
					});
				});

				$(document).on('click', 'body', function (e) {
					if (!$(e.target).closest('.address-search-box').length && $('.drop-down:visible').length) {
						$('.drop-down:visible').prev('.city-select').trigger('click');
					}
				});
				return self;
			},

			eventInit: function eventInit() {
				var self = this;

				$(document).on('click', '.city-select', function () {
					var $this = $(this),
					    index = 0;
					// $parents, $value, $hidden;

					$this.next().toggle();

					if ($this.next().is(':visible') && $this.next().find('.selected').length === 2) {
						$this.next().find('.selected').each(function () {
							var $selected = $(this),
							    scrollTop = $selected.prevAll().length * $selected.outerHeight(true);

							$selected.parent().parent().scrollTop(scrollTop);
						});
					} else {
						$this.next().find('.selected').removeClass('selected');
						$this.next().children().each(function () {
							$(this).scrollTop(0);
						});
						$this.next().find('.drop-city-ul').html($this.next().children().eq(0).find('li:eq(0)').data('citys'));
						// $parents = $this.parents('.address-search-box');
						// $value = $parents.find('.value');
						// $hidden = $parents.find('input:hidden');
						//
						// $value.each(function( i ) {
						// 	i ? $(this).val('省') : $(this).val('市');
						// });
						//
						// $hidden.val('');
					}
				}).on('click', '.drop-prov-ul li', function () {
					var $this = $(this),
					    $cityWrap;

					if (!$this.hasClass('selected')) {
						$this.addClass('selected').siblings('.selected').removeClass('selected');

						$cityWrap = $this.parents('.drop-prov').next();
						$cityWrap.find('.drop-ul').html($this.data('citys'));
					}
				}).on('click', '.drop-city-ul li', function () {
					var $this = $(this),
					    $parents,
					    $value,
					    $hidden;

					if (!$this.hasClass('selected')) {
						$this.addClass('selected').siblings('.selected').removeClass('selected');

						$parents = $this.parents('.address-search-box');
						$value = $parents.find('.value');
						$hidden = $parents.find('input:hidden');

						$this.parents('.drop-down').toggle().find('.selected').each(function (i) {
							$value.eq(i).val($(this).text());
							$hidden.eq(i).val($(this).data('val'));
						});
					}
				});
				return self;
			}
		}
	};
	function stf(s) {
		return new Function('return ' + s)();
	}
	$(document).ready(function () {
		siteFns.init();
		$('.js-pic-box').click(function () {
			var $this = $(this);
			$this.hasClass('select') ? $this.removeClass('selected') : $this.addClass('selected').siblings('li').removeClass('selected');
		});
	});
});
function initGallery(parent) {
	$('.pic-list a').fancybox({
		parent: parent || null,
		fixed: !parent,
		openEffect: 'none',
		closeEffect: 'none',
		padding: 0,
		prevEffect: 'none',
		nextEffect: 'none',
		closeBtn: false,
		helpers: {
			buttons: {
				show: false
			}
		},
		afterLoad: function afterLoad() {
			this.title = this.index + 1 + ' / ' + this.group.length + (this.title ? ' - ' + this.title : '');
		}
	});
}
// 省份
function initSelectBox() {
	var provs = ["北京", "天津", "上海", "重庆", "河北", "山西", "内蒙古", "辽宁", "吉林", "黑龙江", "江苏", "浙江", "安徽", "福建", "江西", "山东", "河南", "湖北", "湖南", "广东", "广西", "海南", "四川", "贵州", "云南", "西藏", "陕西", "甘肃", "青海", "宁夏", "新疆", "香港", "澳门", "台湾"],
	    citys = ["北京", "天津", "上海", "重庆", "石家庄", "张家口", "承德", "秦皇岛", "唐山", "廊坊", "保定", "衡水", "沧州", "邢台", "邯郸", "太原", "朔州", "大同", "阳泉", "长治", "晋城", "忻州", "晋中", "临汾", "吕梁", "运城", "呼和浩特", "包头", "乌海", "赤峰", "通辽", "呼伦贝尔", "鄂尔多斯", "乌兰察布", "巴彦淖尔", "兴安盟", "锡林郭勒盟", "阿拉善盟", "沈阳", "朝阳", "阜新", "铁岭", "抚顺", "本溪", "辽阳", "鞍山", "丹东", "大连", "营口", "盘锦", "锦州", "葫芦岛", "长春", "白城", "松原", "吉林", "四平", "辽源", "通化", "白山", "延边州", "哈尔滨", "齐齐哈尔", "七台河", "黑河", "大庆", "鹤岗", "伊春", "佳木斯", "双鸭山", "鸡西", "牡丹江", "绥化", "大兴安岭", "南京", "徐州", "连云港", "宿迁", "淮安", "盐城", "扬州", "泰州", "南通", "镇江", "常州", "无锡", "苏州", "杭州", "湖州", "嘉兴", "舟山", "宁波", "绍兴", "衢州", "金华", "台州", "温州", "丽水", "合肥", "宿州", "淮北", "亳州", "阜阳", "蚌埠", "淮南", "滁州", "马鞍山", "芜湖", "铜陵", "安庆", "黄山", "六安", "巢湖", "池州", "宣城", "福州", "南平", "莆田", "三明", "泉州", "厦门", "漳州", "龙岩", "宁德", "南昌", "九江", "景德镇", "鹰潭", "新余", "萍乡", "赣州", "上饶", "抚州", "宜春", "吉安", "济南", "青岛", "聊城", "德州", "东营", "淄博", "潍坊", "烟台", "威海", "日照", "临沂", "枣庄", "济宁", "泰安", "莱芜", "滨州", "菏泽", "郑州", "开封", "三门峡", "洛阳", "焦作", "新乡", "鹤壁", "安阳", "濮阳", "商丘", "许昌", "漯河", "平顶山", "南阳", "信阳", "周口", "驻马店", "济源", "武汉", "十堰", "襄阳", "荆门", "孝感", "黄冈", "鄂州", "黄石", "咸宁", "荆州", "宜昌", "随州", "仙桃", "潜江", "天门", "神农架林区", "恩施州", "长沙", "张家界", "常德", "益阳", "岳阳", "株洲", "湘潭", "衡阳", "郴州", "永州", "邵阳", "怀化", "娄底", "湘西州", "广州", "深圳", "清远", "韶关", "河源", "梅州", "潮州", "汕头", "揭阳", "汕尾", "惠州", "东莞", "珠海", "中山", "江门", "佛山", "肇庆", "云浮", "阳江", "茂名", "湛江", "南宁", "桂林", "柳州", "梧州", "贵港", "玉林", "钦州", "北海", "防城港", "崇左", "百色", "河池", "来宾", "贺州", "海口", "三亚", "文昌", "琼海", "万宁", "五指山", "东方", "儋州", "三沙", "成都", "广元", "绵阳", "德阳", "南充", "广安", "遂宁", "内江", "乐山", "自贡", "泸州", "宜宾", "攀枝花", "巴中", "达州", "资阳", "眉山", "雅安", "阿坝州", "甘孜州", "凉山州", "贵阳", "六盘水", "遵义", "安顺", "毕节", "铜仁", "黔东南州", "黔南州", "黔西南州", "昆明", "曲靖", "玉溪", "保山", "昭通", "丽江", "思茅", "临沧", "德宏州", "怒江州", "迪庆州", "大理州", "楚雄州", "红河州", "文山州", "西双版纳", "拉萨", "那曲", "昌都", "林芝", "山南", "日喀则", "阿里", "西安", "延安", "铜川", "渭南", "咸阳", "宝鸡", "汉中", "榆林", "安康", "商洛", "兰州", "嘉峪关", "白银", "天水", "武威", "酒泉", "张掖", "庆阳", "平凉", "定西", "陇南", "临夏州", "甘南州", "西宁", "海东", "海北州", "海南州", "黄南州", "果洛州", "玉树州", "海西州", "银川", "石嘴山", "吴忠", "固原", "中卫", "乌鲁木齐", "克拉玛依", "喀什", "阿克苏", "和田", "吐鲁番", "哈密", "克孜勒苏柯州", "博尔塔拉州", "昌吉州", "巴音郭楞州", "伊犁州", "塔城", "阿勒泰", "香港", "澳门", "台北", "高雄", "台中", "花莲", "基隆", "嘉义", "金门", "连江", "苗栗", "南投", "澎湖", "屏东", "台东", "台南", "桃园", "新竹", "宜兰", "云林", "彰化"],
	    areas = ["朝阳", "阜新", "铁岭", "抚顺", "本溪", "辽阳", "鞍山", "丹东", "大连", "营口", "盘锦", "锦州", "葫芦岛", "长春", "白城", "松原", "吉林", "四平", "辽源", "通化", "白山", "延边州", "哈尔滨", "齐齐哈尔", "七台河", "黑河", "大庆", "鹤岗", "伊春", "佳木斯", "双鸭山", "鸡西", "牡丹江", "绥化"];

	// 省
	for (var index = 0; index < provs.length; index++) {
		$("#prev-select-box").append("<option>" + provs[index] + "</option>");
	}
	// 市
	for (var index = 0; index < citys.length; index++) {
		$("#city-select-box").append("<option>" + citys[index] + "</option>");
	}
	// 区
	for (var index = 0; index < areas.length; index++) {
		$("#area-select-box").append("<option>" + areas[index] + "</option>");
	}
}

/***/ }),

/***/ 198:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function (factory) {
  "use strict";
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(17)], __WEBPACK_AMD_DEFINE_RESULT__ = function ($) {
      return factory($, window, document);
    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if ((typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object') {
    module.exports = function (root, $) {
      if (!root) {
        root = window;
      }if (!$) {
        $ = typeof window !== 'undefined' ? require('jquery') : require('jquery')(root);
      }return factory($, root, root.document);
    };
  } else {
    factory(jQuery, window, document);
  }
})(function ($, window, document, undefined) {
  "use strict";
  var DataTable = function DataTable(options) {
    this.$ = function (sSelector, oOpts) {
      return this.api(true).$(sSelector, oOpts);
    };this._ = function (sSelector, oOpts) {
      return this.api(true).rows(sSelector, oOpts).data();
    };this.api = function (traditional) {
      return traditional ? new _Api2(_fnSettingsFromNode(this[_ext.iApiIndex])) : new _Api2(this);
    };this.fnAddData = function (data, redraw) {
      var api = this.api(true);var rows = $.isArray(data) && ($.isArray(data[0]) || $.isPlainObject(data[0])) ? api.rows.add(data) : api.row.add(data);if (redraw === undefined || redraw) {
        api.draw();
      }return rows.flatten().toArray();
    };this.fnAdjustColumnSizing = function (bRedraw) {
      var api = this.api(true).columns.adjust();var settings = api.settings()[0];var scroll = settings.oScroll;if (bRedraw === undefined || bRedraw) {
        api.draw(false);
      } else if (scroll.sX !== "" || scroll.sY !== "") {
        _fnScrollDraw(settings);
      }
    };this.fnClearTable = function (bRedraw) {
      var api = this.api(true).clear();if (bRedraw === undefined || bRedraw) {
        api.draw();
      }
    };this.fnClose = function (nTr) {
      this.api(true).row(nTr).child.hide();
    };this.fnDeleteRow = function (target, callback, redraw) {
      var api = this.api(true);var rows = api.rows(target);var settings = rows.settings()[0];var data = settings.aoData[rows[0][0]];rows.remove();if (callback) {
        callback.call(this, settings, data);
      }if (redraw === undefined || redraw) {
        api.draw();
      }return data;
    };this.fnDestroy = function (remove) {
      this.api(true).destroy(remove);
    };this.fnDraw = function (complete) {
      this.api(true).draw(complete);
    };this.fnFilter = function (sInput, iColumn, bRegex, bSmart, bShowGlobal, bCaseInsensitive) {
      var api = this.api(true);if (iColumn === null || iColumn === undefined) {
        api.search(sInput, bRegex, bSmart, bCaseInsensitive);
      } else {
        api.column(iColumn).search(sInput, bRegex, bSmart, bCaseInsensitive);
      }api.draw();
    };this.fnGetData = function (src, col) {
      var api = this.api(true);if (src !== undefined) {
        var type = src.nodeName ? src.nodeName.toLowerCase() : '';return col !== undefined || type == 'td' || type == 'th' ? api.cell(src, col).data() : api.row(src).data() || null;
      }return api.data().toArray();
    };this.fnGetNodes = function (iRow) {
      var api = this.api(true);return iRow !== undefined ? api.row(iRow).node() : api.rows().nodes().flatten().toArray();
    };this.fnGetPosition = function (node) {
      var api = this.api(true);var nodeName = node.nodeName.toUpperCase();if (nodeName == 'TR') {
        return api.row(node).index();
      } else if (nodeName == 'TD' || nodeName == 'TH') {
        var cell = api.cell(node).index();return [cell.row, cell.columnVisible, cell.column];
      }return null;
    };this.fnIsOpen = function (nTr) {
      return this.api(true).row(nTr).child.isShown();
    };this.fnOpen = function (nTr, mHtml, sClass) {
      return this.api(true).row(nTr).child(mHtml, sClass).show().child()[0];
    };this.fnPageChange = function (mAction, bRedraw) {
      var api = this.api(true).page(mAction);if (bRedraw === undefined || bRedraw) {
        api.draw(false);
      }
    };this.fnSetColumnVis = function (iCol, bShow, bRedraw) {
      var api = this.api(true).column(iCol).visible(bShow);if (bRedraw === undefined || bRedraw) {
        api.columns.adjust().draw();
      }
    };this.fnSettings = function () {
      return _fnSettingsFromNode(this[_ext.iApiIndex]);
    };this.fnSort = function (aaSort) {
      this.api(true).order(aaSort).draw();
    };this.fnSortListener = function (nNode, iColumn, fnCallback) {
      this.api(true).order.listener(nNode, iColumn, fnCallback);
    };this.fnUpdate = function (mData, mRow, iColumn, bRedraw, bAction) {
      var api = this.api(true);if (iColumn === undefined || iColumn === null) {
        api.row(mRow).data(mData);
      } else {
        api.cell(mRow, iColumn).data(mData);
      }if (bAction === undefined || bAction) {
        api.columns.adjust();
      }if (bRedraw === undefined || bRedraw) {
        api.draw();
      }return 0;
    };this.fnVersionCheck = _ext.fnVersionCheck;var _that = this;var emptyInit = options === undefined;var len = this.length;if (emptyInit) {
      options = {};
    }this.oApi = this.internal = _ext.internal;for (var fn in DataTable.ext.internal) {
      if (fn) {
        this[fn] = _fnExternApiFunc(fn);
      }
    }this.each(function () {
      var o = {};var oInit = len > 1 ? _fnExtend(o, options, true) : options;var i = 0,
          iLen,
          j,
          jLen,
          k,
          kLen;var sId = this.getAttribute('id');var bInitHandedOff = false;var defaults = DataTable.defaults;var $this = $(this);if (this.nodeName.toLowerCase() != 'table') {
        _fnLog(null, 0, 'Non-table node initialisation (' + this.nodeName + ')', 2);return;
      }_fnCompatOpts(defaults);_fnCompatCols(defaults.column);_fnCamelToHungarian(defaults, defaults, true);_fnCamelToHungarian(defaults.column, defaults.column, true);_fnCamelToHungarian(defaults, $.extend(oInit, $this.data()));var allSettings = DataTable.settings;for (i = 0, iLen = allSettings.length; i < iLen; i++) {
        var s = allSettings[i];if (s.nTable == this || s.nTHead.parentNode == this || s.nTFoot && s.nTFoot.parentNode == this) {
          var bRetrieve = oInit.bRetrieve !== undefined ? oInit.bRetrieve : defaults.bRetrieve;var bDestroy = oInit.bDestroy !== undefined ? oInit.bDestroy : defaults.bDestroy;if (emptyInit || bRetrieve) {
            return s.oInstance;
          } else if (bDestroy) {
            s.oInstance.fnDestroy();break;
          } else {
            _fnLog(s, 0, 'Cannot reinitialise DataTable', 3);return;
          }
        }if (s.sTableId == this.id) {
          allSettings.splice(i, 1);break;
        }
      }if (sId === null || sId === "") {
        sId = "DataTables_Table_" + DataTable.ext._unique++;this.id = sId;
      }var oSettings = $.extend(true, {}, DataTable.models.oSettings, { "sDestroyWidth": $this[0].style.width, "sInstance": sId, "sTableId": sId });oSettings.nTable = this;oSettings.oApi = _that.internal;oSettings.oInit = oInit;allSettings.push(oSettings);oSettings.oInstance = _that.length === 1 ? _that : $this.dataTable();_fnCompatOpts(oInit);if (oInit.oLanguage) {
        _fnLanguageCompat(oInit.oLanguage);
      }if (oInit.aLengthMenu && !oInit.iDisplayLength) {
        oInit.iDisplayLength = $.isArray(oInit.aLengthMenu[0]) ? oInit.aLengthMenu[0][0] : oInit.aLengthMenu[0];
      }oInit = _fnExtend($.extend(true, {}, defaults), oInit);_fnMap(oSettings.oFeatures, oInit, ["bPaginate", "bLengthChange", "bFilter", "bSort", "bSortMulti", "bInfo", "bProcessing", "bAutoWidth", "bSortClasses", "bServerSide", "bDeferRender"]);_fnMap(oSettings, oInit, ["asStripeClasses", "ajax", "fnServerData", "fnFormatNumber", "sServerMethod", "aaSorting", "aaSortingFixed", "aLengthMenu", "sPaginationType", "sAjaxSource", "sAjaxDataProp", "iStateDuration", "sDom", "bSortCellsTop", "iTabIndex", "fnStateLoadCallback", "fnStateSaveCallback", "renderer", "searchDelay", "rowId", ["iCookieDuration", "iStateDuration"], ["oSearch", "oPreviousSearch"], ["aoSearchCols", "aoPreSearchCols"], ["iDisplayLength", "_iDisplayLength"], ["bJQueryUI", "bJUI"]]);_fnMap(oSettings.oScroll, oInit, [["sScrollX", "sX"], ["sScrollXInner", "sXInner"], ["sScrollY", "sY"], ["bScrollCollapse", "bCollapse"]]);_fnMap(oSettings.oLanguage, oInit, "fnInfoCallback");_fnCallbackReg(oSettings, 'aoDrawCallback', oInit.fnDrawCallback, 'user');_fnCallbackReg(oSettings, 'aoServerParams', oInit.fnServerParams, 'user');_fnCallbackReg(oSettings, 'aoStateSaveParams', oInit.fnStateSaveParams, 'user');_fnCallbackReg(oSettings, 'aoStateLoadParams', oInit.fnStateLoadParams, 'user');_fnCallbackReg(oSettings, 'aoStateLoaded', oInit.fnStateLoaded, 'user');_fnCallbackReg(oSettings, 'aoRowCallback', oInit.fnRowCallback, 'user');_fnCallbackReg(oSettings, 'aoRowCreatedCallback', oInit.fnCreatedRow, 'user');_fnCallbackReg(oSettings, 'aoHeaderCallback', oInit.fnHeaderCallback, 'user');_fnCallbackReg(oSettings, 'aoFooterCallback', oInit.fnFooterCallback, 'user');_fnCallbackReg(oSettings, 'aoInitComplete', oInit.fnInitComplete, 'user');_fnCallbackReg(oSettings, 'aoPreDrawCallback', oInit.fnPreDrawCallback, 'user');oSettings.rowIdFn = _fnGetObjectDataFn(oInit.rowId);_fnBrowserDetect(oSettings);var oClasses = oSettings.oClasses;if (oInit.bJQueryUI) {
        $.extend(oClasses, DataTable.ext.oJUIClasses, oInit.oClasses);if (oInit.sDom === defaults.sDom && defaults.sDom === "lfrtip") {
          oSettings.sDom = '<"H"lfr>t<"F"ip>';
        }if (!oSettings.renderer) {
          oSettings.renderer = 'jqueryui';
        } else if ($.isPlainObject(oSettings.renderer) && !oSettings.renderer.header) {
          oSettings.renderer.header = 'jqueryui';
        }
      } else {
        $.extend(oClasses, DataTable.ext.classes, oInit.oClasses);
      }$this.addClass(oClasses.sTable);if (oSettings.iInitDisplayStart === undefined) {
        oSettings.iInitDisplayStart = oInit.iDisplayStart;oSettings._iDisplayStart = oInit.iDisplayStart;
      }if (oInit.iDeferLoading !== null) {
        oSettings.bDeferLoading = true;var tmp = $.isArray(oInit.iDeferLoading);oSettings._iRecordsDisplay = tmp ? oInit.iDeferLoading[0] : oInit.iDeferLoading;oSettings._iRecordsTotal = tmp ? oInit.iDeferLoading[1] : oInit.iDeferLoading;
      }var oLanguage = oSettings.oLanguage;$.extend(true, oLanguage, oInit.oLanguage);if (oLanguage.sUrl) {
        $.ajax({ dataType: 'json', url: oLanguage.sUrl, success: function success(json) {
            _fnLanguageCompat(json);_fnCamelToHungarian(defaults.oLanguage, json);$.extend(true, oLanguage, json);_fnInitialise(oSettings);
          }, error: function error() {
            _fnInitialise(oSettings);
          } });bInitHandedOff = true;
      }if (oInit.asStripeClasses === null) {
        oSettings.asStripeClasses = [oClasses.sStripeOdd, oClasses.sStripeEven];
      }var stripeClasses = oSettings.asStripeClasses;var rowOne = $this.children('tbody').find('tr').eq(0);if ($.inArray(true, $.map(stripeClasses, function (el, i) {
        return rowOne.hasClass(el);
      })) !== -1) {
        $('tbody tr', this).removeClass(stripeClasses.join(' '));oSettings.asDestroyStripes = stripeClasses.slice();
      }var anThs = [];var aoColumnsInit;var nThead = this.getElementsByTagName('thead');if (nThead.length !== 0) {
        _fnDetectHeader(oSettings.aoHeader, nThead[0]);anThs = _fnGetUniqueThs(oSettings);
      }if (oInit.aoColumns === null) {
        aoColumnsInit = [];for (i = 0, iLen = anThs.length; i < iLen; i++) {
          aoColumnsInit.push(null);
        }
      } else {
        aoColumnsInit = oInit.aoColumns;
      }for (i = 0, iLen = aoColumnsInit.length; i < iLen; i++) {
        _fnAddColumn(oSettings, anThs ? anThs[i] : null);
      }_fnApplyColumnDefs(oSettings, oInit.aoColumnDefs, aoColumnsInit, function (iCol, oDef) {
        _fnColumnOptions(oSettings, iCol, oDef);
      });if (rowOne.length) {
        var a = function a(cell, name) {
          return cell.getAttribute('data-' + name) !== null ? name : null;
        };$(rowOne[0]).children('th, td').each(function (i, cell) {
          var col = oSettings.aoColumns[i];if (col.mData === i) {
            var sort = a(cell, 'sort') || a(cell, 'order');var filter = a(cell, 'filter') || a(cell, 'search');if (sort !== null || filter !== null) {
              col.mData = { _: i + '.display', sort: sort !== null ? i + '.@data-' + sort : undefined, type: sort !== null ? i + '.@data-' + sort : undefined, filter: filter !== null ? i + '.@data-' + filter : undefined };_fnColumnOptions(oSettings, i);
            }
          }
        });
      }var features = oSettings.oFeatures;var loadedInit = function loadedInit() {
        if (oInit.aaSorting === undefined) {
          var sorting = oSettings.aaSorting;for (i = 0, iLen = sorting.length; i < iLen; i++) {
            sorting[i][1] = oSettings.aoColumns[i].asSorting[0];
          }
        }_fnSortingClasses(oSettings);if (features.bSort) {
          _fnCallbackReg(oSettings, 'aoDrawCallback', function () {
            if (oSettings.bSorted) {
              var aSort = _fnSortFlatten(oSettings);var sortedColumns = {};$.each(aSort, function (i, val) {
                sortedColumns[val.src] = val.dir;
              });_fnCallbackFire(oSettings, null, 'order', [oSettings, aSort, sortedColumns]);_fnSortAria(oSettings);
            }
          });
        }_fnCallbackReg(oSettings, 'aoDrawCallback', function () {
          if (oSettings.bSorted || _fnDataSource(oSettings) === 'ssp' || features.bDeferRender) {
            _fnSortingClasses(oSettings);
          }
        }, 'sc');var captions = $this.children('caption').each(function () {
          this._captionSide = $(this).css('caption-side');
        });var thead = $this.children('thead');if (thead.length === 0) {
          thead = $('<thead/>').appendTo($this);
        }oSettings.nTHead = thead[0];var tbody = $this.children('tbody');if (tbody.length === 0) {
          tbody = $('<tbody/>').appendTo($this);
        }oSettings.nTBody = tbody[0];var tfoot = $this.children('tfoot');if (tfoot.length === 0 && captions.length > 0 && (oSettings.oScroll.sX !== "" || oSettings.oScroll.sY !== "")) {
          tfoot = $('<tfoot/>').appendTo($this);
        }if (tfoot.length === 0 || tfoot.children().length === 0) {
          $this.addClass(oClasses.sNoFooter);
        } else if (tfoot.length > 0) {
          oSettings.nTFoot = tfoot[0];_fnDetectHeader(oSettings.aoFooter, oSettings.nTFoot);
        }if (oInit.aaData) {
          for (i = 0; i < oInit.aaData.length; i++) {
            _fnAddData(oSettings, oInit.aaData[i]);
          }
        } else if (oSettings.bDeferLoading || _fnDataSource(oSettings) == 'dom') {
          _fnAddTr(oSettings, $(oSettings.nTBody).children('tr'));
        }oSettings.aiDisplay = oSettings.aiDisplayMaster.slice();oSettings.bInitialised = true;if (bInitHandedOff === false) {
          _fnInitialise(oSettings);
        }
      };if (oInit.bStateSave) {
        features.bStateSave = true;_fnCallbackReg(oSettings, 'aoDrawCallback', _fnSaveState, 'state_save');_fnLoadState(oSettings, oInit, loadedInit);
      } else {
        loadedInit();
      }
    });_that = null;return this;
  };var _ext;var _Api2;var _api_register;var _api_registerPlural;var _re_dic = {};var _re_new_lines = /[\r\n]/g;var _re_html = /<.*?>/g;var _re_date = /^\d{2,4}[\.\/\-]\d{1,2}[\.\/\-]\d{1,2}([T ]{1}\d{1,2}[:\.]\d{2}([\.:]\d{2})?)?$/;var _re_escape_regex = new RegExp('(\\' + ['/', '.', '*', '+', '?', '|', '(', ')', '[', ']', '{', '}', '\\', '$', '^', '-'].join('|\\') + ')', 'g');var _re_formatted_numeric = /[',$£€¥%\u2009\u202F\u20BD\u20a9\u20BArfk]/gi;var _empty = function _empty(d) {
    return !d || d === true || d === '-' ? true : false;
  };var _intVal = function _intVal(s) {
    var integer = parseInt(s, 10);return !isNaN(integer) && isFinite(s) ? integer : null;
  };var _numToDecimal = function _numToDecimal(num, decimalPoint) {
    if (!_re_dic[decimalPoint]) {
      _re_dic[decimalPoint] = new RegExp(_fnEscapeRegex(decimalPoint), 'g');
    }return typeof num === 'string' && decimalPoint !== '.' ? num.replace(/\./g, '').replace(_re_dic[decimalPoint], '.') : num;
  };var _isNumber = function _isNumber(d, decimalPoint, formatted) {
    var strType = typeof d === 'string';if (_empty(d)) {
      return true;
    }if (decimalPoint && strType) {
      d = _numToDecimal(d, decimalPoint);
    }if (formatted && strType) {
      d = d.replace(_re_formatted_numeric, '');
    }return !isNaN(parseFloat(d)) && isFinite(d);
  };var _isHtml = function _isHtml(d) {
    return _empty(d) || typeof d === 'string';
  };var _htmlNumeric = function _htmlNumeric(d, decimalPoint, formatted) {
    if (_empty(d)) {
      return true;
    }var html = _isHtml(d);return !html ? null : _isNumber(_stripHtml(d), decimalPoint, formatted) ? true : null;
  };var _pluck = function _pluck(a, prop, prop2) {
    var out = [];var i = 0,
        ien = a.length;if (prop2 !== undefined) {
      for (; i < ien; i++) {
        if (a[i] && a[i][prop]) {
          out.push(a[i][prop][prop2]);
        }
      }
    } else {
      for (; i < ien; i++) {
        if (a[i]) {
          out.push(a[i][prop]);
        }
      }
    }return out;
  };var _pluck_order = function _pluck_order(a, order, prop, prop2) {
    var out = [];var i = 0,
        ien = order.length;if (prop2 !== undefined) {
      for (; i < ien; i++) {
        if (a[order[i]][prop]) {
          out.push(a[order[i]][prop][prop2]);
        }
      }
    } else {
      for (; i < ien; i++) {
        out.push(a[order[i]][prop]);
      }
    }return out;
  };var _range = function _range(len, start) {
    var out = [];var end;if (start === undefined) {
      start = 0;end = len;
    } else {
      end = start;start = len;
    }for (var i = start; i < end; i++) {
      out.push(i);
    }return out;
  };var _removeEmpty = function _removeEmpty(a) {
    var out = [];for (var i = 0, ien = a.length; i < ien; i++) {
      if (a[i]) {
        out.push(a[i]);
      }
    }return out;
  };var _stripHtml = function _stripHtml(d) {
    return d.replace(_re_html, '');
  };var _areAllUnique = function _areAllUnique(src) {
    if (src.length < 2) {
      return true;
    }var sorted = src.slice().sort();var last = sorted[0];for (var i = 1, ien = sorted.length; i < ien; i++) {
      if (sorted[i] === last) {
        return false;
      }last = sorted[i];
    }return true;
  };var _unique = function _unique(src) {
    if (_areAllUnique(src)) {
      return src.slice();
    }var out = [],
        val,
        i,
        ien = src.length,
        j,
        k = 0;again: for (i = 0; i < ien; i++) {
      val = src[i];for (j = 0; j < k; j++) {
        if (out[j] === val) {
          continue again;
        }
      }out.push(val);k++;
    }return out;
  };DataTable.util = { throttle: function throttle(fn, freq) {
      var frequency = freq !== undefined ? freq : 200,
          last,
          timer;return function () {
        var that = this,
            now = +new Date(),
            args = arguments;if (last && now < last + frequency) {
          clearTimeout(timer);timer = setTimeout(function () {
            last = undefined;fn.apply(that, args);
          }, frequency);
        } else {
          last = now;fn.apply(that, args);
        }
      };
    }, escapeRegex: function escapeRegex(val) {
      return val.replace(_re_escape_regex, '\\$1');
    } };function _fnHungarianMap(o) {
    var hungarian = 'a aa ai ao as b fn i m o s ',
        match,
        newKey,
        map = {};$.each(o, function (key, val) {
      match = key.match(/^([^A-Z]+?)([A-Z])/);if (match && hungarian.indexOf(match[1] + ' ') !== -1) {
        newKey = key.replace(match[0], match[2].toLowerCase());map[newKey] = key;if (match[1] === 'o') {
          _fnHungarianMap(o[key]);
        }
      }
    });o._hungarianMap = map;
  }function _fnCamelToHungarian(src, user, force) {
    if (!src._hungarianMap) {
      _fnHungarianMap(src);
    }var hungarianKey;$.each(user, function (key, val) {
      hungarianKey = src._hungarianMap[key];if (hungarianKey !== undefined && (force || user[hungarianKey] === undefined)) {
        if (hungarianKey.charAt(0) === 'o') {
          if (!user[hungarianKey]) {
            user[hungarianKey] = {};
          }$.extend(true, user[hungarianKey], user[key]);_fnCamelToHungarian(src[hungarianKey], user[hungarianKey], force);
        } else {
          user[hungarianKey] = user[key];
        }
      }
    });
  }function _fnLanguageCompat(lang) {
    var defaults = DataTable.defaults.oLanguage;var zeroRecords = lang.sZeroRecords;if (!lang.sEmptyTable && zeroRecords && defaults.sEmptyTable === "暂无数据") {
      _fnMap(lang, lang, 'sZeroRecords', 'sEmptyTable');
    }if (!lang.sLoadingRecords && zeroRecords && defaults.sLoadingRecords === "Loading...") {
      _fnMap(lang, lang, 'sZeroRecords', 'sLoadingRecords');
    }if (lang.sInfoThousands) {
      lang.sThousands = lang.sInfoThousands;
    }var decimal = lang.sDecimal;if (decimal) {
      _addNumericSort(decimal);
    }
  }var _fnCompatMap = function _fnCompatMap(o, knew, old) {
    if (o[knew] !== undefined) {
      o[old] = o[knew];
    }
  };function _fnCompatOpts(init) {
    _fnCompatMap(init, 'ordering', 'bSort');_fnCompatMap(init, 'orderMulti', 'bSortMulti');_fnCompatMap(init, 'orderClasses', 'bSortClasses');_fnCompatMap(init, 'orderCellsTop', 'bSortCellsTop');_fnCompatMap(init, 'order', 'aaSorting');_fnCompatMap(init, 'orderFixed', 'aaSortingFixed');_fnCompatMap(init, 'paging', 'bPaginate');_fnCompatMap(init, 'pagingType', 'sPaginationType');_fnCompatMap(init, 'pageLength', 'iDisplayLength');_fnCompatMap(init, 'searching', 'bFilter');if (typeof init.sScrollX === 'boolean') {
      init.sScrollX = init.sScrollX ? '100%' : '';
    }if (typeof init.scrollX === 'boolean') {
      init.scrollX = init.scrollX ? '100%' : '';
    }var searchCols = init.aoSearchCols;if (searchCols) {
      for (var i = 0, ien = searchCols.length; i < ien; i++) {
        if (searchCols[i]) {
          _fnCamelToHungarian(DataTable.models.oSearch, searchCols[i]);
        }
      }
    }
  }function _fnCompatCols(init) {
    _fnCompatMap(init, 'orderable', 'bSortable');_fnCompatMap(init, 'orderData', 'aDataSort');_fnCompatMap(init, 'orderSequence', 'asSorting');_fnCompatMap(init, 'orderDataType', 'sortDataType');var dataSort = init.aDataSort;if (typeof dataSort === 'number' && !$.isArray(dataSort)) {
      init.aDataSort = [dataSort];
    }
  }function _fnBrowserDetect(settings) {
    if (!DataTable.__browser) {
      var browser = {};DataTable.__browser = browser;var n = $('<div/>').css({ position: 'fixed', top: 0, left: $(window).scrollLeft() * -1, height: 1, width: 1, overflow: 'hidden' }).append($('<div/>').css({ position: 'absolute', top: 1, left: 1, width: 100, overflow: 'scroll' }).append($('<div/>').css({ width: '100%', height: 10 }))).appendTo('body');var outer = n.children();var inner = outer.children();browser.barWidth = outer[0].offsetWidth - outer[0].clientWidth;browser.bScrollOversize = inner[0].offsetWidth === 100 && outer[0].clientWidth !== 100;browser.bScrollbarLeft = Math.round(inner.offset().left) !== 1;browser.bBounding = n[0].getBoundingClientRect().width ? true : false;n.remove();
    }$.extend(settings.oBrowser, DataTable.__browser);settings.oScroll.iBarWidth = DataTable.__browser.barWidth;
  }function _fnReduce(that, fn, init, start, end, inc) {
    var i = start,
        value,
        isSet = false;if (init !== undefined) {
      value = init;isSet = true;
    }while (i !== end) {
      if (!that.hasOwnProperty(i)) {
        continue;
      }value = isSet ? fn(value, that[i], i, that) : that[i];isSet = true;i += inc;
    }return value;
  }function _fnAddColumn(oSettings, nTh) {
    var oDefaults = DataTable.defaults.column;var iCol = oSettings.aoColumns.length;var oCol = $.extend({}, DataTable.models.oColumn, oDefaults, { "nTh": nTh ? nTh : document.createElement('th'), "sTitle": oDefaults.sTitle ? oDefaults.sTitle : nTh ? nTh.innerHTML : '', "aDataSort": oDefaults.aDataSort ? oDefaults.aDataSort : [iCol], "mData": oDefaults.mData ? oDefaults.mData : iCol, idx: iCol });oSettings.aoColumns.push(oCol);var searchCols = oSettings.aoPreSearchCols;searchCols[iCol] = $.extend({}, DataTable.models.oSearch, searchCols[iCol]);_fnColumnOptions(oSettings, iCol, $(nTh).data());
  }function _fnColumnOptions(oSettings, iCol, oOptions) {
    var oCol = oSettings.aoColumns[iCol];var oClasses = oSettings.oClasses;var th = $(oCol.nTh);if (!oCol.sWidthOrig) {
      oCol.sWidthOrig = th.attr('width') || null;var t = (th.attr('style') || '').match(/width:\s*(\d+[pxem%]+)/);if (t) {
        oCol.sWidthOrig = t[1];
      }
    }if (oOptions !== undefined && oOptions !== null) {
      _fnCompatCols(oOptions);_fnCamelToHungarian(DataTable.defaults.column, oOptions);if (oOptions.mDataProp !== undefined && !oOptions.mData) {
        oOptions.mData = oOptions.mDataProp;
      }if (oOptions.sType) {
        oCol._sManualType = oOptions.sType;
      }if (oOptions.className && !oOptions.sClass) {
        oOptions.sClass = oOptions.className;
      }$.extend(oCol, oOptions);_fnMap(oCol, oOptions, "sWidth", "sWidthOrig");if (oOptions.iDataSort !== undefined) {
        oCol.aDataSort = [oOptions.iDataSort];
      }_fnMap(oCol, oOptions, "aDataSort");
    }var mDataSrc = oCol.mData;var mData = _fnGetObjectDataFn(mDataSrc);var mRender = oCol.mRender ? _fnGetObjectDataFn(oCol.mRender) : null;var attrTest = function attrTest(src) {
      return typeof src === 'string' && src.indexOf('@') !== -1;
    };oCol._bAttrSrc = $.isPlainObject(mDataSrc) && (attrTest(mDataSrc.sort) || attrTest(mDataSrc.type) || attrTest(mDataSrc.filter));oCol._setter = null;oCol.fnGetData = function (rowData, type, meta) {
      var innerData = mData(rowData, type, undefined, meta);return mRender && type ? mRender(innerData, type, rowData, meta) : innerData;
    };oCol.fnSetData = function (rowData, val, meta) {
      return _fnSetObjectDataFn(mDataSrc)(rowData, val, meta);
    };if (typeof mDataSrc !== 'number') {
      oSettings._rowReadObject = true;
    }if (!oSettings.oFeatures.bSort) {
      oCol.bSortable = false;th.addClass(oClasses.sSortableNone);
    }var bAsc = $.inArray('asc', oCol.asSorting) !== -1;var bDesc = $.inArray('desc', oCol.asSorting) !== -1;if (!oCol.bSortable || !bAsc && !bDesc) {
      oCol.sSortingClass = oClasses.sSortableNone;oCol.sSortingClassJUI = "";
    } else if (bAsc && !bDesc) {
      oCol.sSortingClass = oClasses.sSortableAsc;oCol.sSortingClassJUI = oClasses.sSortJUIAscAllowed;
    } else if (!bAsc && bDesc) {
      oCol.sSortingClass = oClasses.sSortableDesc;oCol.sSortingClassJUI = oClasses.sSortJUIDescAllowed;
    } else {
      oCol.sSortingClass = oClasses.sSortable;oCol.sSortingClassJUI = oClasses.sSortJUI;
    }
  }function _fnAdjustColumnSizing(settings) {
    if (settings.oFeatures.bAutoWidth !== false) {
      var columns = settings.aoColumns;_fnCalculateColumnWidths(settings);for (var i = 0, iLen = columns.length; i < iLen; i++) {
        columns[i].nTh.style.width = columns[i].sWidth;
      }
    }var scroll = settings.oScroll;if (scroll.sY !== '' || scroll.sX !== '') {
      _fnScrollDraw(settings);
    }_fnCallbackFire(settings, null, 'column-sizing', [settings]);
  }function _fnVisibleToColumnIndex(oSettings, iMatch) {
    var aiVis = _fnGetColumns(oSettings, 'bVisible');return typeof aiVis[iMatch] === 'number' ? aiVis[iMatch] : null;
  }function _fnColumnIndexToVisible(oSettings, iMatch) {
    var aiVis = _fnGetColumns(oSettings, 'bVisible');var iPos = $.inArray(iMatch, aiVis);return iPos !== -1 ? iPos : null;
  }function _fnVisbleColumns(oSettings) {
    var vis = 0;$.each(oSettings.aoColumns, function (i, col) {
      if (col.bVisible && $(col.nTh).css('display') !== 'none') {
        vis++;
      }
    });return vis;
  }function _fnGetColumns(oSettings, sParam) {
    var a = [];$.map(oSettings.aoColumns, function (val, i) {
      if (val[sParam]) {
        a.push(i);
      }
    });return a;
  }function _fnColumnTypes(settings) {
    var columns = settings.aoColumns;var data = settings.aoData;var types = DataTable.ext.type.detect;var i, ien, j, jen, k, ken;var col, cell, detectedType, cache;for (i = 0, ien = columns.length; i < ien; i++) {
      col = columns[i];cache = [];if (!col.sType && col._sManualType) {
        col.sType = col._sManualType;
      } else if (!col.sType) {
        for (j = 0, jen = types.length; j < jen; j++) {
          for (k = 0, ken = data.length; k < ken; k++) {
            if (cache[k] === undefined) {
              cache[k] = _fnGetCellData(settings, k, i, 'type');
            }detectedType = types[j](cache[k], settings);if (!detectedType && j !== types.length - 1) {
              break;
            }if (detectedType === 'html') {
              break;
            }
          }if (detectedType) {
            col.sType = detectedType;break;
          }
        }if (!col.sType) {
          col.sType = 'string';
        }
      }
    }
  }function _fnApplyColumnDefs(oSettings, aoColDefs, aoCols, fn) {
    var i, iLen, j, jLen, k, kLen, def;var columns = oSettings.aoColumns;if (aoColDefs) {
      for (i = aoColDefs.length - 1; i >= 0; i--) {
        def = aoColDefs[i];var aTargets = def.targets !== undefined ? def.targets : def.aTargets;if (!$.isArray(aTargets)) {
          aTargets = [aTargets];
        }for (j = 0, jLen = aTargets.length; j < jLen; j++) {
          if (typeof aTargets[j] === 'number' && aTargets[j] >= 0) {
            while (columns.length <= aTargets[j]) {
              _fnAddColumn(oSettings);
            }fn(aTargets[j], def);
          } else if (typeof aTargets[j] === 'number' && aTargets[j] < 0) {
            fn(columns.length + aTargets[j], def);
          } else if (typeof aTargets[j] === 'string') {
            for (k = 0, kLen = columns.length; k < kLen; k++) {
              if (aTargets[j] == "_all" || $(columns[k].nTh).hasClass(aTargets[j])) {
                fn(k, def);
              }
            }
          }
        }
      }
    }if (aoCols) {
      for (i = 0, iLen = aoCols.length; i < iLen; i++) {
        fn(i, aoCols[i]);
      }
    }
  }function _fnAddData(oSettings, aDataIn, nTr, anTds) {
    var iRow = oSettings.aoData.length;var oData = $.extend(true, {}, DataTable.models.oRow, { src: nTr ? 'dom' : 'data', idx: iRow });oData._aData = aDataIn;oSettings.aoData.push(oData);var nTd, sThisType;var columns = oSettings.aoColumns;for (var i = 0, iLen = columns.length; i < iLen; i++) {
      columns[i].sType = null;
    }oSettings.aiDisplayMaster.push(iRow);var id = oSettings.rowIdFn(aDataIn);if (id !== undefined) {
      oSettings.aIds[id] = oData;
    }if (nTr || !oSettings.oFeatures.bDeferRender) {
      _fnCreateTr(oSettings, iRow, nTr, anTds);
    }return iRow;
  }function _fnAddTr(settings, trs) {
    var row;if (!(trs instanceof $)) {
      trs = $(trs);
    }return trs.map(function (i, el) {
      row = _fnGetRowElements(settings, el);return _fnAddData(settings, row.data, el, row.cells);
    });
  }function _fnNodeToDataIndex(oSettings, n) {
    return n._DT_RowIndex !== undefined ? n._DT_RowIndex : null;
  }function _fnNodeToColumnIndex(oSettings, iRow, n) {
    return $.inArray(n, oSettings.aoData[iRow].anCells);
  }function _fnGetCellData(settings, rowIdx, colIdx, type) {
    var draw = settings.iDraw;var col = settings.aoColumns[colIdx];var rowData = settings.aoData[rowIdx]._aData;var defaultContent = col.sDefaultContent;var cellData = col.fnGetData(rowData, type, { settings: settings, row: rowIdx, col: colIdx });if (cellData === undefined) {
      if (settings.iDrawError != draw && defaultContent === null) {
        _fnLog(settings, 0, "Requested unknown parameter " + (typeof col.mData == 'function' ? '{function}' : "'" + col.mData + "'") + " for row " + rowIdx + ", column " + colIdx, 4);settings.iDrawError = draw;
      }return defaultContent;
    }if ((cellData === rowData || cellData === null) && defaultContent !== null && type !== undefined) {
      cellData = defaultContent;
    } else if (typeof cellData === 'function') {
      return cellData.call(rowData);
    }if (cellData === null && type == 'display') {
      return '';
    }return cellData;
  }function _fnSetCellData(settings, rowIdx, colIdx, val) {
    var col = settings.aoColumns[colIdx];var rowData = settings.aoData[rowIdx]._aData;col.fnSetData(rowData, val, { settings: settings, row: rowIdx, col: colIdx });
  }var __reArray = /\[.*?\]$/;var __reFn = /\(\)$/;function _fnSplitObjNotation(str) {
    return $.map(str.match(/(\\.|[^\.])+/g) || [''], function (s) {
      return s.replace(/\\\./g, '.');
    });
  }function _fnGetObjectDataFn(mSource) {
    if ($.isPlainObject(mSource)) {
      var o = {};$.each(mSource, function (key, val) {
        if (val) {
          o[key] = _fnGetObjectDataFn(val);
        }
      });return function (data, type, row, meta) {
        var t = o[type] || o._;return t !== undefined ? t(data, type, row, meta) : data;
      };
    } else if (mSource === null) {
      return function (data) {
        return data;
      };
    } else if (typeof mSource === 'function') {
      return function (data, type, row, meta) {
        return mSource(data, type, row, meta);
      };
    } else if (typeof mSource === 'string' && (mSource.indexOf('.') !== -1 || mSource.indexOf('[') !== -1 || mSource.indexOf('(') !== -1)) {
      var fetchData = function fetchData(data, type, src) {
        var arrayNotation, funcNotation, out, innerSrc;if (src !== "") {
          var a = _fnSplitObjNotation(src);for (var i = 0, iLen = a.length; i < iLen; i++) {
            arrayNotation = a[i].match(__reArray);funcNotation = a[i].match(__reFn);if (arrayNotation) {
              a[i] = a[i].replace(__reArray, '');if (a[i] !== "") {
                data = data[a[i]];
              }out = [];a.splice(0, i + 1);innerSrc = a.join('.');if ($.isArray(data)) {
                for (var j = 0, jLen = data.length; j < jLen; j++) {
                  out.push(fetchData(data[j], type, innerSrc));
                }
              }var join = arrayNotation[0].substring(1, arrayNotation[0].length - 1);data = join === "" ? out : out.join(join);break;
            } else if (funcNotation) {
              a[i] = a[i].replace(__reFn, '');data = data[a[i]]();continue;
            }if (data === null || data[a[i]] === undefined) {
              return undefined;
            }data = data[a[i]];
          }
        }return data;
      };return function (data, type) {
        return fetchData(data, type, mSource);
      };
    } else {
      return function (data, type) {
        return data[mSource];
      };
    }
  }function _fnSetObjectDataFn(mSource) {
    if ($.isPlainObject(mSource)) {
      return _fnSetObjectDataFn(mSource._);
    } else if (mSource === null) {
      return function () {};
    } else if (typeof mSource === 'function') {
      return function (data, val, meta) {
        mSource(data, 'set', val, meta);
      };
    } else if (typeof mSource === 'string' && (mSource.indexOf('.') !== -1 || mSource.indexOf('[') !== -1 || mSource.indexOf('(') !== -1)) {
      var setData = function setData(data, val, src) {
        var a = _fnSplitObjNotation(src),
            b;var aLast = a[a.length - 1];var arrayNotation, funcNotation, o, innerSrc;for (var i = 0, iLen = a.length - 1; i < iLen; i++) {
          arrayNotation = a[i].match(__reArray);funcNotation = a[i].match(__reFn);if (arrayNotation) {
            a[i] = a[i].replace(__reArray, '');data[a[i]] = [];b = a.slice();b.splice(0, i + 1);innerSrc = b.join('.');if ($.isArray(val)) {
              for (var j = 0, jLen = val.length; j < jLen; j++) {
                o = {};setData(o, val[j], innerSrc);data[a[i]].push(o);
              }
            } else {
              data[a[i]] = val;
            }return;
          } else if (funcNotation) {
            a[i] = a[i].replace(__reFn, '');data = data[a[i]](val);
          }if (data[a[i]] === null || data[a[i]] === undefined) {
            data[a[i]] = {};
          }data = data[a[i]];
        }if (aLast.match(__reFn)) {
          data = data[aLast.replace(__reFn, '')](val);
        } else {
          data[aLast.replace(__reArray, '')] = val;
        }
      };return function (data, val) {
        return setData(data, val, mSource);
      };
    } else {
      return function (data, val) {
        data[mSource] = val;
      };
    }
  }function _fnGetDataMaster(settings) {
    return _pluck(settings.aoData, '_aData');
  }function _fnClearTable(settings) {
    settings.aoData.length = 0;settings.aiDisplayMaster.length = 0;settings.aiDisplay.length = 0;settings.aIds = {};
  }function _fnDeleteIndex(a, iTarget, splice) {
    var iTargetIndex = -1;for (var i = 0, iLen = a.length; i < iLen; i++) {
      if (a[i] == iTarget) {
        iTargetIndex = i;
      } else if (a[i] > iTarget) {
        a[i]--;
      }
    }if (iTargetIndex != -1 && splice === undefined) {
      a.splice(iTargetIndex, 1);
    }
  }function _fnInvalidate(settings, rowIdx, src, colIdx) {
    var row = settings.aoData[rowIdx];var i, ien;var cellWrite = function cellWrite(cell, col) {
      while (cell.childNodes.length) {
        cell.removeChild(cell.firstChild);
      }cell.innerHTML = _fnGetCellData(settings, rowIdx, col, 'display');
    };if (src === 'dom' || (!src || src === 'auto') && row.src === 'dom') {
      row._aData = _fnGetRowElements(settings, row, colIdx, colIdx === undefined ? undefined : row._aData).data;
    } else {
      var cells = row.anCells;if (cells) {
        if (colIdx !== undefined) {
          cellWrite(cells[colIdx], colIdx);
        } else {
          for (i = 0, ien = cells.length; i < ien; i++) {
            cellWrite(cells[i], i);
          }
        }
      }
    }row._aSortData = null;row._aFilterData = null;var cols = settings.aoColumns;if (colIdx !== undefined) {
      cols[colIdx].sType = null;
    } else {
      for (i = 0, ien = cols.length; i < ien; i++) {
        cols[i].sType = null;
      }_fnRowAttributes(settings, row);
    }
  }function _fnGetRowElements(settings, row, colIdx, d) {
    var tds = [],
        td = row.firstChild,
        name,
        col,
        o,
        i = 0,
        contents,
        columns = settings.aoColumns,
        objectRead = settings._rowReadObject;d = d !== undefined ? d : objectRead ? {} : [];var attr = function attr(str, td) {
      if (typeof str === 'string') {
        var idx = str.indexOf('@');if (idx !== -1) {
          var attr = str.substring(idx + 1);var setter = _fnSetObjectDataFn(str);setter(d, td.getAttribute(attr));
        }
      }
    };var cellProcess = function cellProcess(cell) {
      if (colIdx === undefined || colIdx === i) {
        col = columns[i];contents = $.trim(cell.innerHTML);if (col && col._bAttrSrc) {
          var setter = _fnSetObjectDataFn(col.mData._);setter(d, contents);attr(col.mData.sort, cell);attr(col.mData.type, cell);attr(col.mData.filter, cell);
        } else {
          if (objectRead) {
            if (!col._setter) {
              col._setter = _fnSetObjectDataFn(col.mData);
            }col._setter(d, contents);
          } else {
            d[i] = contents;
          }
        }
      }i++;
    };if (td) {
      while (td) {
        name = td.nodeName.toUpperCase();if (name == "TD" || name == "TH") {
          cellProcess(td);tds.push(td);
        }td = td.nextSibling;
      }
    } else {
      tds = row.anCells;for (var j = 0, jen = tds.length; j < jen; j++) {
        cellProcess(tds[j]);
      }
    }var rowNode = row.firstChild ? row : row.nTr;if (rowNode) {
      var id = rowNode.getAttribute('id');if (id) {
        _fnSetObjectDataFn(settings.rowId)(d, id);
      }
    }return { data: d, cells: tds };
  }function _fnCreateTr(oSettings, iRow, nTrIn, anTds) {
    var row = oSettings.aoData[iRow],
        rowData = row._aData,
        cells = [],
        nTr,
        nTd,
        oCol,
        i,
        iLen;if (row.nTr === null) {
      nTr = nTrIn || document.createElement('tr');row.nTr = nTr;row.anCells = cells;nTr._DT_RowIndex = iRow;_fnRowAttributes(oSettings, row);for (i = 0, iLen = oSettings.aoColumns.length; i < iLen; i++) {
        oCol = oSettings.aoColumns[i];nTd = nTrIn ? anTds[i] : document.createElement(oCol.sCellType);nTd._DT_CellIndex = { row: iRow, column: i };cells.push(nTd);if ((!nTrIn || oCol.mRender || oCol.mData !== i) && (!$.isPlainObject(oCol.mData) || oCol.mData._ !== i + '.display')) {
          nTd.innerHTML = _fnGetCellData(oSettings, iRow, i, 'display');
        }if (oCol.sClass) {
          nTd.className += ' ' + oCol.sClass;
        }if (oCol.bVisible && !nTrIn) {
          nTr.appendChild(nTd);
        } else if (!oCol.bVisible && nTrIn) {
          nTd.parentNode.removeChild(nTd);
        }if (oCol.fnCreatedCell) {
          oCol.fnCreatedCell.call(oSettings.oInstance, nTd, _fnGetCellData(oSettings, iRow, i), rowData, iRow, i);
        }
      }_fnCallbackFire(oSettings, 'aoRowCreatedCallback', null, [nTr, rowData, iRow]);
    }row.nTr.setAttribute('role', 'row');
  }function _fnRowAttributes(settings, row) {
    var tr = row.nTr;var data = row._aData;if (tr) {
      var id = settings.rowIdFn(data);if (id) {
        tr.id = id;
      }if (data.DT_RowClass) {
        var a = data.DT_RowClass.split(' ');row.__rowc = row.__rowc ? _unique(row.__rowc.concat(a)) : a;$(tr).removeClass(row.__rowc.join(' ')).addClass(data.DT_RowClass);
      }if (data.DT_RowAttr) {
        $(tr).attr(data.DT_RowAttr);
      }if (data.DT_RowData) {
        $(tr).data(data.DT_RowData);
      }
    }
  }function _fnBuildHead(oSettings) {
    var i, ien, cell, row, column;var thead = oSettings.nTHead;var tfoot = oSettings.nTFoot;var createHeader = $('th, td', thead).length === 0;var classes = oSettings.oClasses;var columns = oSettings.aoColumns;if (createHeader) {
      row = $('<tr/>').appendTo(thead);
    }for (i = 0, ien = columns.length; i < ien; i++) {
      column = columns[i];cell = $(column.nTh).addClass(column.sClass);if (createHeader) {
        cell.appendTo(row);
      }if (oSettings.oFeatures.bSort) {
        cell.addClass(column.sSortingClass);if (column.bSortable !== false) {
          cell.attr('tabindex', oSettings.iTabIndex).attr('aria-controls', oSettings.sTableId);_fnSortAttachListener(oSettings, column.nTh, i);
        }
      }if (column.sTitle != cell[0].innerHTML) {
        cell.html(column.sTitle);
      }_fnRenderer(oSettings, 'header')(oSettings, cell, column, classes);
    }if (createHeader) {
      _fnDetectHeader(oSettings.aoHeader, thead);
    }$(thead).find('>tr').attr('role', 'row');$(thead).find('>tr>th, >tr>td').addClass(classes.sHeaderTH);$(tfoot).find('>tr>th, >tr>td').addClass(classes.sFooterTH);if (tfoot !== null) {
      var cells = oSettings.aoFooter[0];for (i = 0, ien = cells.length; i < ien; i++) {
        column = columns[i];column.nTf = cells[i].cell;if (column.sClass) {
          $(column.nTf).addClass(column.sClass);
        }
      }
    }
  }function _fnDrawHead(oSettings, aoSource, bIncludeHidden) {
    var i, iLen, j, jLen, k, kLen, n, nLocalTr;var aoLocal = [];var aApplied = [];var iColumns = oSettings.aoColumns.length;var iRowspan, iColspan;if (!aoSource) {
      return;
    }if (bIncludeHidden === undefined) {
      bIncludeHidden = false;
    }for (i = 0, iLen = aoSource.length; i < iLen; i++) {
      aoLocal[i] = aoSource[i].slice();aoLocal[i].nTr = aoSource[i].nTr;for (j = iColumns - 1; j >= 0; j--) {
        if (!oSettings.aoColumns[j].bVisible && !bIncludeHidden) {
          aoLocal[i].splice(j, 1);
        }
      }aApplied.push([]);
    }for (i = 0, iLen = aoLocal.length; i < iLen; i++) {
      nLocalTr = aoLocal[i].nTr;if (nLocalTr) {
        while (n = nLocalTr.firstChild) {
          nLocalTr.removeChild(n);
        }
      }for (j = 0, jLen = aoLocal[i].length; j < jLen; j++) {
        iRowspan = 1;iColspan = 1;if (aApplied[i][j] === undefined) {
          nLocalTr.appendChild(aoLocal[i][j].cell);aApplied[i][j] = 1;while (aoLocal[i + iRowspan] !== undefined && aoLocal[i][j].cell == aoLocal[i + iRowspan][j].cell) {
            aApplied[i + iRowspan][j] = 1;iRowspan++;
          }while (aoLocal[i][j + iColspan] !== undefined && aoLocal[i][j].cell == aoLocal[i][j + iColspan].cell) {
            for (k = 0; k < iRowspan; k++) {
              aApplied[i + k][j + iColspan] = 1;
            }iColspan++;
          }$(aoLocal[i][j].cell).attr('rowspan', iRowspan).attr('colspan', iColspan);
        }
      }
    }
  }function _fnDraw(oSettings) {
    var aPreDraw = _fnCallbackFire(oSettings, 'aoPreDrawCallback', 'preDraw', [oSettings]);if ($.inArray(false, aPreDraw) !== -1) {
      _fnProcessingDisplay(oSettings, false);return;
    }var i, iLen, n;var anRows = [];var iRowCount = 0;var asStripeClasses = oSettings.asStripeClasses;var iStripes = asStripeClasses.length;var iOpenRows = oSettings.aoOpenRows.length;var oLang = oSettings.oLanguage;var iInitDisplayStart = oSettings.iInitDisplayStart;var bServerSide = _fnDataSource(oSettings) == 'ssp';var aiDisplay = oSettings.aiDisplay;oSettings.bDrawing = true;if (iInitDisplayStart !== undefined && iInitDisplayStart !== -1) {
      oSettings._iDisplayStart = bServerSide ? iInitDisplayStart : iInitDisplayStart >= oSettings.fnRecordsDisplay() ? 0 : iInitDisplayStart;oSettings.iInitDisplayStart = -1;
    }var iDisplayStart = oSettings._iDisplayStart;var iDisplayEnd = oSettings.fnDisplayEnd();if (oSettings.bDeferLoading) {
      oSettings.bDeferLoading = false;oSettings.iDraw++;_fnProcessingDisplay(oSettings, false);
    } else if (!bServerSide) {
      oSettings.iDraw++;
    } else if (!oSettings.bDestroying && !_fnAjaxUpdate(oSettings)) {
      return;
    }if (aiDisplay.length !== 0) {
      var iStart = bServerSide ? 0 : iDisplayStart;var iEnd = bServerSide ? oSettings.aoData.length : iDisplayEnd;for (var j = iStart; j < iEnd; j++) {
        var iDataIndex = aiDisplay[j];var aoData = oSettings.aoData[iDataIndex];if (aoData.nTr === null) {
          _fnCreateTr(oSettings, iDataIndex);
        }var nRow = aoData.nTr;if (iStripes !== 0) {
          var sStripe = asStripeClasses[iRowCount % iStripes];if (aoData._sRowStripe != sStripe) {
            $(nRow).removeClass(aoData._sRowStripe).addClass(sStripe);aoData._sRowStripe = sStripe;
          }
        }_fnCallbackFire(oSettings, 'aoRowCallback', null, [nRow, aoData._aData, iRowCount, j]);anRows.push(nRow);iRowCount++;
      }
    } else {
      var sZero = oLang.sZeroRecords;if (oSettings.iDraw == 1 && _fnDataSource(oSettings) == 'ajax') {
        sZero = oLang.sLoadingRecords;
      } else if (oLang.sEmptyTable && oSettings.fnRecordsTotal() === 0) {
        sZero = oLang.sEmptyTable;
      }anRows[0] = $('<tr/>', { 'class': iStripes ? asStripeClasses[0] : '' }).append($('<td />', { 'valign': 'top', 'colSpan': _fnVisbleColumns(oSettings), 'class': oSettings.oClasses.sRowEmpty }).html(sZero))[0];
    }_fnCallbackFire(oSettings, 'aoHeaderCallback', 'header', [$(oSettings.nTHead).children('tr')[0], _fnGetDataMaster(oSettings), iDisplayStart, iDisplayEnd, aiDisplay]);_fnCallbackFire(oSettings, 'aoFooterCallback', 'footer', [$(oSettings.nTFoot).children('tr')[0], _fnGetDataMaster(oSettings), iDisplayStart, iDisplayEnd, aiDisplay]);var body = $(oSettings.nTBody);body.children().detach();body.append($(anRows));_fnCallbackFire(oSettings, 'aoDrawCallback', 'draw', [oSettings]);oSettings.bSorted = false;oSettings.bFiltered = false;oSettings.bDrawing = false;
  }function _fnReDraw(settings, holdPosition) {
    var features = settings.oFeatures,
        sort = features.bSort,
        filter = features.bFilter;if (sort) {
      _fnSort(settings);
    }if (filter) {
      _fnFilterComplete(settings, settings.oPreviousSearch);
    } else {
      settings.aiDisplay = settings.aiDisplayMaster.slice();
    }if (holdPosition !== true) {
      settings._iDisplayStart = 0;
    }settings._drawHold = holdPosition;_fnDraw(settings);settings._drawHold = false;
  }function _fnAddOptionsHtml(oSettings) {
    var classes = oSettings.oClasses;var table = $(oSettings.nTable);var holding = $('<div/>').insertBefore(table);var features = oSettings.oFeatures;var insert = $('<div/>', { id: oSettings.sTableId + '_wrapper', 'class': classes.sWrapper + (oSettings.nTFoot ? '' : ' ' + classes.sNoFooter) });oSettings.nHolding = holding[0];oSettings.nTableWrapper = insert[0];oSettings.nTableReinsertBefore = oSettings.nTable.nextSibling;var aDom = oSettings.sDom.split('');var featureNode, cOption, nNewNode, cNext, sAttr, j;for (var i = 0; i < aDom.length; i++) {
      featureNode = null;cOption = aDom[i];if (cOption == '<') {
        nNewNode = $('<div/>')[0];cNext = aDom[i + 1];if (cNext == "'" || cNext == '"') {
          sAttr = "";j = 2;while (aDom[i + j] != cNext) {
            sAttr += aDom[i + j];j++;
          }if (sAttr == "H") {
            sAttr = classes.sJUIHeader;
          } else if (sAttr == "F") {
            sAttr = classes.sJUIFooter;
          }if (sAttr.indexOf('.') != -1) {
            var aSplit = sAttr.split('.');nNewNode.id = aSplit[0].substr(1, aSplit[0].length - 1);nNewNode.className = aSplit[1];
          } else if (sAttr.charAt(0) == "#") {
            nNewNode.id = sAttr.substr(1, sAttr.length - 1);
          } else {
            nNewNode.className = sAttr;
          }i += j;
        }insert.append(nNewNode);insert = $(nNewNode);
      } else if (cOption == '>') {
        insert = insert.parent();
      } else if (cOption == 'l' && features.bPaginate && features.bLengthChange) {
        featureNode = _fnFeatureHtmlLength(oSettings);
      } else if (cOption == 'f' && features.bFilter) {
        featureNode = _fnFeatureHtmlFilter(oSettings);
      } else if (cOption == 'r' && features.bProcessing) {
        featureNode = _fnFeatureHtmlProcessing(oSettings);
      } else if (cOption == 't') {
        featureNode = _fnFeatureHtmlTable(oSettings);
      } else if (cOption == 'i' && features.bInfo) {
        featureNode = _fnFeatureHtmlInfo(oSettings);
      } else if (cOption == 'p' && features.bPaginate) {
        featureNode = _fnFeatureHtmlPaginate(oSettings);
      } else if (DataTable.ext.feature.length !== 0) {
        var aoFeatures = DataTable.ext.feature;for (var k = 0, kLen = aoFeatures.length; k < kLen; k++) {
          if (cOption == aoFeatures[k].cFeature) {
            featureNode = aoFeatures[k].fnInit(oSettings);break;
          }
        }
      }if (featureNode) {
        var aanFeatures = oSettings.aanFeatures;if (!aanFeatures[cOption]) {
          aanFeatures[cOption] = [];
        }aanFeatures[cOption].push(featureNode);insert.append(featureNode);
      }
    }holding.replaceWith(insert);oSettings.nHolding = null;
  }function _fnDetectHeader(aLayout, nThead) {
    var nTrs = $(nThead).children('tr');var nTr, nCell;var i, k, l, iLen, jLen, iColShifted, iColumn, iColspan, iRowspan;var bUnique;var fnShiftCol = function fnShiftCol(a, i, j) {
      var k = a[i];while (k[j]) {
        j++;
      }return j;
    };aLayout.splice(0, aLayout.length);for (i = 0, iLen = nTrs.length; i < iLen; i++) {
      aLayout.push([]);
    }for (i = 0, iLen = nTrs.length; i < iLen; i++) {
      nTr = nTrs[i];iColumn = 0;nCell = nTr.firstChild;while (nCell) {
        if (nCell.nodeName.toUpperCase() == "TD" || nCell.nodeName.toUpperCase() == "TH") {
          iColspan = nCell.getAttribute('colspan') * 1;iRowspan = nCell.getAttribute('rowspan') * 1;iColspan = !iColspan || iColspan === 0 || iColspan === 1 ? 1 : iColspan;iRowspan = !iRowspan || iRowspan === 0 || iRowspan === 1 ? 1 : iRowspan;iColShifted = fnShiftCol(aLayout, i, iColumn);bUnique = iColspan === 1 ? true : false;for (l = 0; l < iColspan; l++) {
            for (k = 0; k < iRowspan; k++) {
              aLayout[i + k][iColShifted + l] = { "cell": nCell, "unique": bUnique };aLayout[i + k].nTr = nTr;
            }
          }
        }nCell = nCell.nextSibling;
      }
    }
  }function _fnGetUniqueThs(oSettings, nHeader, aLayout) {
    var aReturn = [];if (!aLayout) {
      aLayout = oSettings.aoHeader;if (nHeader) {
        aLayout = [];_fnDetectHeader(aLayout, nHeader);
      }
    }for (var i = 0, iLen = aLayout.length; i < iLen; i++) {
      for (var j = 0, jLen = aLayout[i].length; j < jLen; j++) {
        if (aLayout[i][j].unique && (!aReturn[j] || !oSettings.bSortCellsTop)) {
          aReturn[j] = aLayout[i][j].cell;
        }
      }
    }return aReturn;
  }function _fnBuildAjax(oSettings, data, fn) {
    _fnCallbackFire(oSettings, 'aoServerParams', 'serverParams', [data]);if (data && $.isArray(data)) {
      var tmp = {};var rbracket = /(.*?)\[\]$/;$.each(data, function (key, val) {
        var match = val.name.match(rbracket);if (match) {
          var name = match[0];if (!tmp[name]) {
            tmp[name] = [];
          }tmp[name].push(val.value);
        } else {
          tmp[val.name] = val.value;
        }
      });data = tmp;
    }var ajaxData;var ajax = oSettings.ajax;var instance = oSettings.oInstance;var callback = function callback(json) {
      _fnCallbackFire(oSettings, null, 'xhr', [oSettings, json, oSettings.jqXHR]);fn(json);
    };if ($.isPlainObject(ajax) && ajax.data) {
      ajaxData = ajax.data;var newData = $.isFunction(ajaxData) ? ajaxData(data, oSettings) : ajaxData;data = $.isFunction(ajaxData) && newData ? newData : $.extend(true, data, newData);delete ajax.data;
    }var baseAjax = { "data": data, "success": function success(json) {
        var error = json.error || json.sError;if (error) {
          _fnLog(oSettings, 0, error);
        }oSettings.json = json;callback(json);
      }, "dataType": "json", "cache": false, "type": oSettings.sServerMethod, "error": function error(xhr, _error, thrown) {
        var ret = _fnCallbackFire(oSettings, null, 'xhr', [oSettings, null, oSettings.jqXHR]);if ($.inArray(true, ret) === -1) {
          if (_error == "parsererror") {
            _fnLog(oSettings, 0, 'Invalid JSON response', 1);
          } else if (xhr.readyState === 4) {
            _fnLog(oSettings, 0, 'Ajax error', 7);
          }
        }_fnProcessingDisplay(oSettings, false);
      } };oSettings.oAjaxData = data;_fnCallbackFire(oSettings, null, 'preXhr', [oSettings, data]);if (oSettings.fnServerData) {
      oSettings.fnServerData.call(instance, oSettings.sAjaxSource, $.map(data, function (val, key) {
        return { name: key, value: val };
      }), callback, oSettings);
    } else if (oSettings.sAjaxSource || typeof ajax === 'string') {
      oSettings.jqXHR = $.ajax($.extend(baseAjax, { url: ajax || oSettings.sAjaxSource }));
    } else if ($.isFunction(ajax)) {
      oSettings.jqXHR = ajax.call(instance, data, callback, oSettings);
    } else {
      oSettings.jqXHR = $.ajax($.extend(baseAjax, ajax));ajax.data = ajaxData;
    }
  }function _fnAjaxUpdate(settings) {
    if (settings.bAjaxDataGet) {
      settings.iDraw++;_fnProcessingDisplay(settings, true);_fnBuildAjax(settings, _fnAjaxParameters(settings), function (json) {
        _fnAjaxUpdateDraw(settings, json);
      });return false;
    }return true;
  }function _fnAjaxParameters(settings) {
    var columns = settings.aoColumns,
        columnCount = columns.length,
        features = settings.oFeatures,
        preSearch = settings.oPreviousSearch,
        preColSearch = settings.aoPreSearchCols,
        i,
        data = [],
        dataProp,
        column,
        columnSearch,
        sort = _fnSortFlatten(settings),
        displayStart = settings._iDisplayStart,
        displayLength = features.bPaginate !== false ? settings._iDisplayLength : -1;var param = function param(name, value) {
      data.push({ 'name': name, 'value': value });
    };param('sEcho', settings.iDraw);param('iColumns', columnCount);param('sColumns', _pluck(columns, 'sName').join(','));param('iDisplayStart', displayStart);param('iDisplayLength', displayLength);var d = { draw: settings.iDraw, columns: [], order: [], start: displayStart, length: displayLength, search: { value: preSearch.sSearch, regex: preSearch.bRegex } };for (i = 0; i < columnCount; i++) {
      column = columns[i];columnSearch = preColSearch[i];dataProp = typeof column.mData == "function" ? 'function' : column.mData;d.columns.push({ data: dataProp, name: column.sName, searchable: column.bSearchable, orderable: column.bSortable, search: { value: columnSearch.sSearch, regex: columnSearch.bRegex } });param("mDataProp_" + i, dataProp);if (features.bFilter) {
        param('sSearch_' + i, columnSearch.sSearch);param('bRegex_' + i, columnSearch.bRegex);param('bSearchable_' + i, column.bSearchable);
      }if (features.bSort) {
        param('bSortable_' + i, column.bSortable);
      }
    }if (features.bFilter) {
      param('sSearch', preSearch.sSearch);param('bRegex', preSearch.bRegex);
    }if (features.bSort) {
      $.each(sort, function (i, val) {
        d.order.push({ column: val.col, dir: val.dir });param('iSortCol_' + i, val.col);param('sSortDir_' + i, val.dir);
      });param('iSortingCols', sort.length);
    }var legacy = DataTable.ext.legacy.ajax;if (legacy === null) {
      return settings.sAjaxSource ? data : d;
    }return legacy ? data : d;
  }function _fnAjaxUpdateDraw(settings, json) {
    var compat = function compat(old, modern) {
      return json[old] !== undefined ? json[old] : json[modern];
    };var data = _fnAjaxDataSrc(settings, json);var draw = compat('sEcho', 'draw');var recordsTotal = compat('iTotalRecords', 'recordsTotal');var recordsFiltered = compat('iTotalDisplayRecords', 'recordsFiltered');if (draw) {
      if (draw * 1 < settings.iDraw) {
        return;
      }settings.iDraw = draw * 1;
    }_fnClearTable(settings);settings._iRecordsTotal = parseInt(recordsTotal, 10);settings._iRecordsDisplay = parseInt(recordsFiltered, 10);for (var i = 0, ien = data.length; i < ien; i++) {
      _fnAddData(settings, data[i]);
    }settings.aiDisplay = settings.aiDisplayMaster.slice();settings.bAjaxDataGet = false;_fnDraw(settings);if (!settings._bInitComplete) {
      _fnInitComplete(settings, json);
    }settings.bAjaxDataGet = true;_fnProcessingDisplay(settings, false);
  }function _fnAjaxDataSrc(oSettings, json) {
    var dataSrc = $.isPlainObject(oSettings.ajax) && oSettings.ajax.dataSrc !== undefined ? oSettings.ajax.dataSrc : oSettings.sAjaxDataProp;if (dataSrc === 'data') {
      return json.aaData || json[dataSrc];
    }return dataSrc !== "" ? _fnGetObjectDataFn(dataSrc)(json) : json;
  }function _fnFeatureHtmlFilter(settings) {
    var classes = settings.oClasses;var tableId = settings.sTableId;var language = settings.oLanguage;var previousSearch = settings.oPreviousSearch;var features = settings.aanFeatures;var input = '<input type="search" class="' + classes.sFilterInput + '"/>';var str = language.sSearch;str = str.match(/_INPUT_/) ? str.replace('_INPUT_', input) : str + input;var filter = $('<div/>', { 'id': !features.f ? tableId + '_filter' : null, 'class': classes.sFilter }).append($('<label/>').append(str));var searchFn = function searchFn() {
      var n = features.f;var val = !this.value ? "" : this.value;if (val != previousSearch.sSearch) {
        _fnFilterComplete(settings, { "sSearch": val, "bRegex": previousSearch.bRegex, "bSmart": previousSearch.bSmart, "bCaseInsensitive": previousSearch.bCaseInsensitive });settings._iDisplayStart = 0;_fnDraw(settings);
      }
    };var searchDelay = settings.searchDelay !== null ? settings.searchDelay : _fnDataSource(settings) === 'ssp' ? 400 : 0;var jqFilter = $('input', filter).val(previousSearch.sSearch).attr('placeholder', language.sSearchPlaceholder).on('keyup.DT search.DT input.DT paste.DT cut.DT', searchDelay ? _fnThrottle(searchFn, searchDelay) : searchFn).on('keypress.DT', function (e) {
      if (e.keyCode == 13) {
        return false;
      }
    }).attr('aria-controls', tableId);$(settings.nTable).on('search.dt.DT', function (ev, s) {
      if (settings === s) {
        try {
          if (jqFilter[0] !== document.activeElement) {
            jqFilter.val(previousSearch.sSearch);
          }
        } catch (e) {}
      }
    });return filter[0];
  }function _fnFilterComplete(oSettings, oInput, iForce) {
    var oPrevSearch = oSettings.oPreviousSearch;var aoPrevSearch = oSettings.aoPreSearchCols;var fnSaveFilter = function fnSaveFilter(oFilter) {
      oPrevSearch.sSearch = oFilter.sSearch;oPrevSearch.bRegex = oFilter.bRegex;oPrevSearch.bSmart = oFilter.bSmart;oPrevSearch.bCaseInsensitive = oFilter.bCaseInsensitive;
    };var fnRegex = function fnRegex(o) {
      return o.bEscapeRegex !== undefined ? !o.bEscapeRegex : o.bRegex;
    };_fnColumnTypes(oSettings);if (_fnDataSource(oSettings) != 'ssp') {
      _fnFilter(oSettings, oInput.sSearch, iForce, fnRegex(oInput), oInput.bSmart, oInput.bCaseInsensitive);fnSaveFilter(oInput);for (var i = 0; i < aoPrevSearch.length; i++) {
        _fnFilterColumn(oSettings, aoPrevSearch[i].sSearch, i, fnRegex(aoPrevSearch[i]), aoPrevSearch[i].bSmart, aoPrevSearch[i].bCaseInsensitive);
      }_fnFilterCustom(oSettings);
    } else {
      fnSaveFilter(oInput);
    }oSettings.bFiltered = true;_fnCallbackFire(oSettings, null, 'search', [oSettings]);
  }function _fnFilterCustom(settings) {
    var filters = DataTable.ext.search;var displayRows = settings.aiDisplay;var row, rowIdx;for (var i = 0, ien = filters.length; i < ien; i++) {
      var rows = [];for (var j = 0, jen = displayRows.length; j < jen; j++) {
        rowIdx = displayRows[j];row = settings.aoData[rowIdx];if (filters[i](settings, row._aFilterData, rowIdx, row._aData, j)) {
          rows.push(rowIdx);
        }
      }displayRows.length = 0;$.merge(displayRows, rows);
    }
  }function _fnFilterColumn(settings, searchStr, colIdx, regex, smart, caseInsensitive) {
    if (searchStr === '') {
      return;
    }var data;var out = [];var display = settings.aiDisplay;var rpSearch = _fnFilterCreateSearch(searchStr, regex, smart, caseInsensitive);for (var i = 0; i < display.length; i++) {
      data = settings.aoData[display[i]]._aFilterData[colIdx];if (rpSearch.test(data)) {
        out.push(display[i]);
      }
    }settings.aiDisplay = out;
  }function _fnFilter(settings, input, force, regex, smart, caseInsensitive) {
    var rpSearch = _fnFilterCreateSearch(input, regex, smart, caseInsensitive);var prevSearch = settings.oPreviousSearch.sSearch;var displayMaster = settings.aiDisplayMaster;var display, invalidated, i;var filtered = [];if (DataTable.ext.search.length !== 0) {
      force = true;
    }invalidated = _fnFilterData(settings);if (input.length <= 0) {
      settings.aiDisplay = displayMaster.slice();
    } else {
      if (invalidated || force || prevSearch.length > input.length || input.indexOf(prevSearch) !== 0 || settings.bSorted) {
        settings.aiDisplay = displayMaster.slice();
      }display = settings.aiDisplay;for (i = 0; i < display.length; i++) {
        if (rpSearch.test(settings.aoData[display[i]]._sFilterRow)) {
          filtered.push(display[i]);
        }
      }settings.aiDisplay = filtered;
    }
  }function _fnFilterCreateSearch(search, regex, smart, caseInsensitive) {
    search = regex ? search : _fnEscapeRegex(search);if (smart) {
      var a = $.map(search.match(/"[^"]+"|[^ ]+/g) || [''], function (word) {
        if (word.charAt(0) === '"') {
          var m = word.match(/^"(.*)"$/);word = m ? m[1] : word;
        }return word.replace('"', '');
      });search = '^(?=.*?' + a.join(')(?=.*?') + ').*$';
    }return new RegExp(search, caseInsensitive ? 'i' : '');
  }var _fnEscapeRegex = DataTable.util.escapeRegex;var __filter_div = $('<div>')[0];var __filter_div_textContent = __filter_div.textContent !== undefined;function _fnFilterData(settings) {
    var columns = settings.aoColumns;var column;var i, j, ien, jen, filterData, cellData, row;var fomatters = DataTable.ext.type.search;var wasInvalidated = false;for (i = 0, ien = settings.aoData.length; i < ien; i++) {
      row = settings.aoData[i];if (!row._aFilterData) {
        filterData = [];for (j = 0, jen = columns.length; j < jen; j++) {
          column = columns[j];if (column.bSearchable) {
            cellData = _fnGetCellData(settings, i, j, 'filter');if (fomatters[column.sType]) {
              cellData = fomatters[column.sType](cellData);
            }if (cellData === null) {
              cellData = '';
            }if (typeof cellData !== 'string' && cellData.toString) {
              cellData = cellData.toString();
            }
          } else {
            cellData = '';
          }if (cellData.indexOf && cellData.indexOf('&') !== -1) {
            __filter_div.innerHTML = cellData;cellData = __filter_div_textContent ? __filter_div.textContent : __filter_div.innerText;
          }if (cellData.replace) {
            cellData = cellData.replace(/[\r\n]/g, '');
          }filterData.push(cellData);
        }row._aFilterData = filterData;row._sFilterRow = filterData.join('  ');wasInvalidated = true;
      }
    }return wasInvalidated;
  }function _fnSearchToCamel(obj) {
    return { search: obj.sSearch, smart: obj.bSmart, regex: obj.bRegex, caseInsensitive: obj.bCaseInsensitive };
  }function _fnSearchToHung(obj) {
    return { sSearch: obj.search, bSmart: obj.smart, bRegex: obj.regex, bCaseInsensitive: obj.caseInsensitive };
  }function _fnFeatureHtmlInfo(settings) {
    var tid = settings.sTableId,
        nodes = settings.aanFeatures.i,
        n = $('<div/>', { 'class': settings.oClasses.sInfo, 'id': !nodes ? tid + '_info' : null });if (!nodes) {
      settings.aoDrawCallback.push({ "fn": _fnUpdateInfo, "sName": "information" });n.attr('role', 'status').attr('aria-live', 'polite');$(settings.nTable).attr('aria-describedby', tid + '_info');
    }return n[0];
  }function _fnUpdateInfo(settings) {
    var nodes = settings.aanFeatures.i;if (nodes.length === 0) {
      return;
    }var lang = settings.oLanguage,
        start = settings._iDisplayStart + 1,
        end = settings.fnDisplayEnd(),
        max = settings.fnRecordsTotal(),
        total = settings.fnRecordsDisplay(),
        out = total ? lang.sInfo : lang.sInfoEmpty;if (total !== max) {
      out += ' ' + lang.sInfoFiltered;
    }out += lang.sInfoPostFix;out = _fnInfoMacros(settings, out);var callback = lang.fnInfoCallback;if (callback !== null) {
      out = callback.call(settings.oInstance, settings, start, end, max, total, out);
    }$(nodes).html(out);
  }function _fnInfoMacros(settings, str) {
    var formatter = settings.fnFormatNumber,
        start = settings._iDisplayStart + 1,
        len = settings._iDisplayLength,
        vis = settings.fnRecordsDisplay(),
        all = len === -1;return str.replace(/_START_/g, formatter.call(settings, start)).replace(/_END_/g, formatter.call(settings, settings.fnDisplayEnd())).replace(/_MAX_/g, formatter.call(settings, settings.fnRecordsTotal())).replace(/_TOTAL_/g, formatter.call(settings, vis)).replace(/_PAGE_/g, formatter.call(settings, all ? 1 : Math.ceil(start / len))).replace(/_PAGES_/g, formatter.call(settings, all ? 1 : Math.ceil(vis / len)));
  }function _fnInitialise(settings) {
    var i,
        iLen,
        iAjaxStart = settings.iInitDisplayStart;var columns = settings.aoColumns,
        column;var features = settings.oFeatures;var deferLoading = settings.bDeferLoading;if (!settings.bInitialised) {
      setTimeout(function () {
        _fnInitialise(settings);
      }, 200);return;
    }_fnAddOptionsHtml(settings);_fnBuildHead(settings);_fnDrawHead(settings, settings.aoHeader);_fnDrawHead(settings, settings.aoFooter);_fnProcessingDisplay(settings, true);if (features.bAutoWidth) {
      _fnCalculateColumnWidths(settings);
    }for (i = 0, iLen = columns.length; i < iLen; i++) {
      column = columns[i];if (column.sWidth) {
        column.nTh.style.width = _fnStringToCss(column.sWidth);
      }
    }_fnCallbackFire(settings, null, 'preInit', [settings]);_fnReDraw(settings);var dataSrc = _fnDataSource(settings);if (dataSrc != 'ssp' || deferLoading) {
      if (dataSrc == 'ajax') {
        _fnBuildAjax(settings, [], function (json) {
          var aData = _fnAjaxDataSrc(settings, json);for (i = 0; i < aData.length; i++) {
            _fnAddData(settings, aData[i]);
          }settings.iInitDisplayStart = iAjaxStart;_fnReDraw(settings);_fnProcessingDisplay(settings, false);_fnInitComplete(settings, json);
        }, settings);
      } else {
        _fnProcessingDisplay(settings, false);_fnInitComplete(settings);
      }
    }
  }function _fnInitComplete(settings, json) {
    settings._bInitComplete = true;if (json || settings.oInit.aaData) {
      _fnAdjustColumnSizing(settings);
    }_fnCallbackFire(settings, null, 'plugin-init', [settings, json]);_fnCallbackFire(settings, 'aoInitComplete', 'init', [settings, json]);
  }function _fnLengthChange(settings, val) {
    var len = parseInt(val, 10);settings._iDisplayLength = len;_fnLengthOverflow(settings);_fnCallbackFire(settings, null, 'length', [settings, len]);
  }function _fnFeatureHtmlLength(settings) {
    var classes = settings.oClasses,
        tableId = settings.sTableId,
        menu = settings.aLengthMenu,
        d2 = $.isArray(menu[0]),
        lengths = d2 ? menu[0] : menu,
        language = d2 ? menu[1] : menu;var select = $('<select/>', { 'name': tableId + '_length', 'aria-controls': tableId, 'class': classes.sLengthSelect });for (var i = 0, ien = lengths.length; i < ien; i++) {
      select[0][i] = new Option(language[i], lengths[i]);
    }var div = $('<div><label/></div>').addClass(classes.sLength);if (!settings.aanFeatures.l) {
      div[0].id = tableId + '_length';
    }div.children().append(settings.oLanguage.sLengthMenu.replace('_MENU_', select[0].outerHTML));$('select', div).val(settings._iDisplayLength).on('change.DT', function (e) {
      _fnLengthChange(settings, $(this).val());_fnDraw(settings);
    });$(settings.nTable).on('length.dt.DT', function (e, s, len) {
      if (settings === s) {
        $('select', div).val(len);
      }
    });return div[0];
  }function _fnFeatureHtmlPaginate(settings) {
    var type = settings.sPaginationType,
        plugin = DataTable.ext.pager[type],
        modern = typeof plugin === 'function',
        redraw = function redraw(settings) {
      _fnDraw(settings);
    },
        node = $('<div/>').addClass(settings.oClasses.sPaging + type)[0],
        features = settings.aanFeatures;if (!modern) {
      plugin.fnInit(settings, node, redraw);
    }if (!features.p) {
      node.id = settings.sTableId + '_paginate';settings.aoDrawCallback.push({ "fn": function fn(settings) {
          if (modern) {
            var start = settings._iDisplayStart,
                len = settings._iDisplayLength,
                visRecords = settings.fnRecordsDisplay(),
                all = len === -1,
                page = all ? 0 : Math.ceil(start / len),
                pages = all ? 1 : Math.ceil(visRecords / len),
                buttons = plugin(page, pages),
                i,
                ien;for (i = 0, ien = features.p.length; i < ien; i++) {
              _fnRenderer(settings, 'pageButton')(settings, features.p[i], i, buttons, page, pages);
            }
          } else {
            plugin.fnUpdate(settings, redraw);
          }
        }, "sName": "pagination" });
    }return node;
  }function _fnPageChange(settings, action, redraw) {
    var start = settings._iDisplayStart,
        len = settings._iDisplayLength,
        records = settings.fnRecordsDisplay();if (records === 0 || len === -1) {
      start = 0;
    } else if (typeof action === "number") {
      start = action * len;if (start > records) {
        start = 0;
      }
    } else if (action == "first") {
      start = 0;
    } else if (action == "previous") {
      start = len >= 0 ? start - len : 0;if (start < 0) {
        start = 0;
      }
    } else if (action == "next") {
      if (start + len < records) {
        start += len;
      }
    } else if (action == "last") {
      start = Math.floor((records - 1) / len) * len;
    } else {
      _fnLog(settings, 0, "Unknown paging action: " + action, 5);
    }var changed = settings._iDisplayStart !== start;settings._iDisplayStart = start;if (changed) {
      _fnCallbackFire(settings, null, 'page', [settings]);if (redraw) {
        _fnDraw(settings);
      }
    }return changed;
  }function _fnFeatureHtmlProcessing(settings) {
    return $('<div/>', { 'id': !settings.aanFeatures.r ? settings.sTableId + '_processing' : null, 'class': settings.oClasses.sProcessing }).html(settings.oLanguage.sProcessing).insertBefore(settings.nTable)[0];
  }function _fnProcessingDisplay(settings, show) {
    if (settings.oFeatures.bProcessing) {
      $(settings.aanFeatures.r).css('display', show ? 'block' : 'none');
    }_fnCallbackFire(settings, null, 'processing', [settings, show]);
  }function _fnFeatureHtmlTable(settings) {
    var table = $(settings.nTable);table.attr('role', 'grid');var scroll = settings.oScroll;if (scroll.sX === '' && scroll.sY === '') {
      return settings.nTable;
    }var scrollX = scroll.sX;var scrollY = scroll.sY;var classes = settings.oClasses;var caption = table.children('caption');var captionSide = caption.length ? caption[0]._captionSide : null;var headerClone = $(table[0].cloneNode(false));var footerClone = $(table[0].cloneNode(false));var footer = table.children('tfoot');var _div = '<div/>';var size = function size(s) {
      return !s ? null : _fnStringToCss(s);
    };if (!footer.length) {
      footer = null;
    }var scroller = $(_div, { 'class': classes.sScrollWrapper }).append($(_div, { 'class': classes.sScrollHead }).css({ overflow: 'hidden', position: 'relative', border: 0, width: scrollX ? size(scrollX) : '100%' }).append($(_div, { 'class': classes.sScrollHeadInner }).css({ 'box-sizing': 'content-box', width: scroll.sXInner || '100%' }).append(headerClone.removeAttr('id').css('margin-left', 0).append(captionSide === 'top' ? caption : null).append(table.children('thead'))))).append($(_div, { 'class': classes.sScrollBody }).css({ position: 'relative', overflow: 'auto', width: size(scrollX) }).append(table));if (footer) {
      scroller.append($(_div, { 'class': classes.sScrollFoot }).css({ overflow: 'hidden', border: 0, width: scrollX ? size(scrollX) : '100%' }).append($(_div, { 'class': classes.sScrollFootInner }).append(footerClone.removeAttr('id').css('margin-left', 0).append(captionSide === 'bottom' ? caption : null).append(table.children('tfoot')))));
    }var children = scroller.children();var scrollHead = children[0];var scrollBody = children[1];var scrollFoot = footer ? children[2] : null;if (scrollX) {
      $(scrollBody).on('scroll.DT', function (e) {
        var scrollLeft = this.scrollLeft;scrollHead.scrollLeft = scrollLeft;if (footer) {
          scrollFoot.scrollLeft = scrollLeft;
        }
      });
    }$(scrollBody).css(scrollY && scroll.bCollapse ? 'max-height' : 'height', scrollY);settings.nScrollHead = scrollHead;settings.nScrollBody = scrollBody;settings.nScrollFoot = scrollFoot;settings.aoDrawCallback.push({ "fn": _fnScrollDraw, "sName": "scrolling" });return scroller[0];
  }function _fnScrollDraw(settings) {
    var scroll = settings.oScroll,
        scrollX = scroll.sX,
        scrollXInner = scroll.sXInner,
        scrollY = scroll.sY,
        barWidth = scroll.iBarWidth,
        divHeader = $(settings.nScrollHead),
        divHeaderStyle = divHeader[0].style,
        divHeaderInner = divHeader.children('div'),
        divHeaderInnerStyle = divHeaderInner[0].style,
        divHeaderTable = divHeaderInner.children('table'),
        divBodyEl = settings.nScrollBody,
        divBody = $(divBodyEl),
        divBodyStyle = divBodyEl.style,
        divFooter = $(settings.nScrollFoot),
        divFooterInner = divFooter.children('div'),
        divFooterTable = divFooterInner.children('table'),
        header = $(settings.nTHead),
        table = $(settings.nTable),
        tableEl = table[0],
        tableStyle = tableEl.style,
        footer = settings.nTFoot ? $(settings.nTFoot) : null,
        browser = settings.oBrowser,
        ie67 = browser.bScrollOversize,
        dtHeaderCells = _pluck(settings.aoColumns, 'nTh'),
        headerTrgEls,
        footerTrgEls,
        headerSrcEls,
        footerSrcEls,
        headerCopy,
        footerCopy,
        headerWidths = [],
        footerWidths = [],
        headerContent = [],
        footerContent = [],
        idx,
        correction,
        sanityWidth,
        zeroOut = function zeroOut(nSizer) {
      var style = nSizer.style;style.paddingTop = "0";style.paddingBottom = "0";style.borderTopWidth = "0";style.borderBottomWidth = "0";style.height = 0;
    };var scrollBarVis = divBodyEl.scrollHeight > divBodyEl.clientHeight;if (settings.scrollBarVis !== scrollBarVis && settings.scrollBarVis !== undefined) {
      settings.scrollBarVis = scrollBarVis;_fnAdjustColumnSizing(settings);return;
    } else {
      settings.scrollBarVis = scrollBarVis;
    }table.children('thead, tfoot').remove();if (footer) {
      footerCopy = footer.clone().prependTo(table);footerTrgEls = footer.find('tr');footerSrcEls = footerCopy.find('tr');
    }headerCopy = header.clone().prependTo(table);headerTrgEls = header.find('tr');headerSrcEls = headerCopy.find('tr');headerCopy.find('th, td').removeAttr('tabindex');if (!scrollX) {
      divBodyStyle.width = '100%';divHeader[0].style.width = '100%';
    }$.each(_fnGetUniqueThs(settings, headerCopy), function (i, el) {
      idx = _fnVisibleToColumnIndex(settings, i);el.style.width = settings.aoColumns[idx].sWidth;
    });if (footer) {
      _fnApplyToChildren(function (n) {
        n.style.width = "";
      }, footerSrcEls);
    }sanityWidth = table.outerWidth();if (scrollX === "") {
      tableStyle.width = "100%";if (ie67 && (table.find('tbody').height() > divBodyEl.offsetHeight || divBody.css('overflow-y') == "scroll")) {
        tableStyle.width = _fnStringToCss(table.outerWidth() - barWidth);
      }sanityWidth = table.outerWidth();
    } else if (scrollXInner !== "") {
      tableStyle.width = _fnStringToCss(scrollXInner);sanityWidth = table.outerWidth();
    }_fnApplyToChildren(zeroOut, headerSrcEls);_fnApplyToChildren(function (nSizer) {
      headerContent.push(nSizer.innerHTML);headerWidths.push(_fnStringToCss($(nSizer).css('width')));
    }, headerSrcEls);_fnApplyToChildren(function (nToSize, i) {
      if ($.inArray(nToSize, dtHeaderCells) !== -1) {
        nToSize.style.width = headerWidths[i];
      }
    }, headerTrgEls);$(headerSrcEls).height(0);if (footer) {
      _fnApplyToChildren(zeroOut, footerSrcEls);_fnApplyToChildren(function (nSizer) {
        footerContent.push(nSizer.innerHTML);footerWidths.push(_fnStringToCss($(nSizer).css('width')));
      }, footerSrcEls);_fnApplyToChildren(function (nToSize, i) {
        nToSize.style.width = footerWidths[i];
      }, footerTrgEls);$(footerSrcEls).height(0);
    }_fnApplyToChildren(function (nSizer, i) {
      nSizer.innerHTML = '<div class="dataTables_sizing" style="height:0;overflow:hidden;">' + headerContent[i] + '</div>';nSizer.style.width = headerWidths[i];
    }, headerSrcEls);if (footer) {
      _fnApplyToChildren(function (nSizer, i) {
        nSizer.innerHTML = '<div class="dataTables_sizing" style="height:0;overflow:hidden;">' + footerContent[i] + '</div>';nSizer.style.width = footerWidths[i];
      }, footerSrcEls);
    }if (table.outerWidth() < sanityWidth) {
      correction = divBodyEl.scrollHeight > divBodyEl.offsetHeight || divBody.css('overflow-y') == "scroll" ? sanityWidth + barWidth : sanityWidth;if (ie67 && (divBodyEl.scrollHeight > divBodyEl.offsetHeight || divBody.css('overflow-y') == "scroll")) {
        tableStyle.width = _fnStringToCss(correction - barWidth);
      }if (scrollX === "" || scrollXInner !== "") {
        _fnLog(settings, 1, 'Possible column misalignment', 6);
      }
    } else {
      correction = '100%';
    }divBodyStyle.width = _fnStringToCss(correction);divHeaderStyle.width = _fnStringToCss(correction);if (footer) {
      settings.nScrollFoot.style.width = _fnStringToCss(correction);
    }if (!scrollY) {
      if (ie67) {
        divBodyStyle.height = _fnStringToCss(tableEl.offsetHeight + barWidth);
      }
    }var iOuterWidth = table.outerWidth();divHeaderTable[0].style.width = _fnStringToCss(iOuterWidth);divHeaderInnerStyle.width = _fnStringToCss(iOuterWidth);var bScrolling = table.height() > divBodyEl.clientHeight || divBody.css('overflow-y') == "scroll";var padding = 'padding' + (browser.bScrollbarLeft ? 'Left' : 'Right');divHeaderInnerStyle[padding] = bScrolling ? barWidth + "px" : "0px";if (footer) {
      divFooterTable[0].style.width = _fnStringToCss(iOuterWidth);divFooterInner[0].style.width = _fnStringToCss(iOuterWidth);divFooterInner[0].style[padding] = bScrolling ? barWidth + "px" : "0px";
    }table.children('colgroup').insertBefore(table.children('thead'));divBody.scroll();if ((settings.bSorted || settings.bFiltered) && !settings._drawHold) {
      divBodyEl.scrollTop = 0;
    }
  }function _fnApplyToChildren(fn, an1, an2) {
    var index = 0,
        i = 0,
        iLen = an1.length;var nNode1, nNode2;while (i < iLen) {
      nNode1 = an1[i].firstChild;nNode2 = an2 ? an2[i].firstChild : null;while (nNode1) {
        if (nNode1.nodeType === 1) {
          if (an2) {
            fn(nNode1, nNode2, index);
          } else {
            fn(nNode1, index);
          }index++;
        }nNode1 = nNode1.nextSibling;nNode2 = an2 ? nNode2.nextSibling : null;
      }i++;
    }
  }var __re_html_remove = /<.*?>/g;function _fnCalculateColumnWidths(oSettings) {
    var table = oSettings.nTable,
        columns = oSettings.aoColumns,
        scroll = oSettings.oScroll,
        scrollY = scroll.sY,
        scrollX = scroll.sX,
        scrollXInner = scroll.sXInner,
        columnCount = columns.length,
        visibleColumns = _fnGetColumns(oSettings, 'bVisible'),
        headerCells = $('th', oSettings.nTHead),
        tableWidthAttr = table.getAttribute('width'),
        tableContainer = table.parentNode,
        userInputs = false,
        i,
        column,
        columnIdx,
        width,
        outerWidth,
        browser = oSettings.oBrowser,
        ie67 = browser.bScrollOversize;var styleWidth = table.style.width;if (styleWidth && styleWidth.indexOf('%') !== -1) {
      tableWidthAttr = styleWidth;
    }for (i = 0; i < visibleColumns.length; i++) {
      column = columns[visibleColumns[i]];if (column.sWidth !== null) {
        column.sWidth = _fnConvertToWidth(column.sWidthOrig, tableContainer);userInputs = true;
      }
    }if (ie67 || !userInputs && !scrollX && !scrollY && columnCount == _fnVisbleColumns(oSettings) && columnCount == headerCells.length) {
      for (i = 0; i < columnCount; i++) {
        var colIdx = _fnVisibleToColumnIndex(oSettings, i);if (colIdx !== null) {
          columns[colIdx].sWidth = _fnStringToCss(headerCells.eq(i).width());
        }
      }
    } else {
      var tmpTable = $(table).clone().css('visibility', 'hidden').removeAttr('id');tmpTable.find('tbody tr').remove();var tr = $('<tr/>').appendTo(tmpTable.find('tbody'));tmpTable.find('thead, tfoot').remove();tmpTable.append($(oSettings.nTHead).clone()).append($(oSettings.nTFoot).clone());tmpTable.find('tfoot th, tfoot td').css('width', '');headerCells = _fnGetUniqueThs(oSettings, tmpTable.find('thead')[0]);for (i = 0; i < visibleColumns.length; i++) {
        column = columns[visibleColumns[i]];headerCells[i].style.width = column.sWidthOrig !== null && column.sWidthOrig !== '' ? _fnStringToCss(column.sWidthOrig) : '';if (column.sWidthOrig && scrollX) {
          $(headerCells[i]).append($('<div/>').css({ width: column.sWidthOrig, margin: 0, padding: 0, border: 0, height: 1 }));
        }
      }if (oSettings.aoData.length) {
        for (i = 0; i < visibleColumns.length; i++) {
          columnIdx = visibleColumns[i];column = columns[columnIdx];$(_fnGetWidestNode(oSettings, columnIdx)).clone(false).append(column.sContentPadding).appendTo(tr);
        }
      }$('[name]', tmpTable).removeAttr('name');var holder = $('<div/>').css(scrollX || scrollY ? { position: 'absolute', top: 0, left: 0, height: 1, right: 0, overflow: 'hidden' } : {}).append(tmpTable).appendTo(tableContainer);if (scrollX && scrollXInner) {
        tmpTable.width(scrollXInner);
      } else if (scrollX) {
        tmpTable.css('width', 'auto');tmpTable.removeAttr('width');if (tmpTable.width() < tableContainer.clientWidth && tableWidthAttr) {
          tmpTable.width(tableContainer.clientWidth);
        }
      } else if (scrollY) {
        tmpTable.width(tableContainer.clientWidth);
      } else if (tableWidthAttr) {
        tmpTable.width(tableWidthAttr);
      }var total = 0;for (i = 0; i < visibleColumns.length; i++) {
        var cell = $(headerCells[i]);var border = cell.outerWidth() - cell.width();var bounding = browser.bBounding ? Math.ceil(headerCells[i].getBoundingClientRect().width) : cell.outerWidth();total += bounding;columns[visibleColumns[i]].sWidth = _fnStringToCss(bounding - border);
      }table.style.width = _fnStringToCss(total);holder.remove();
    }if (tableWidthAttr) {
      table.style.width = _fnStringToCss(tableWidthAttr);
    }if ((tableWidthAttr || scrollX) && !oSettings._reszEvt) {
      var bindResize = function bindResize() {
        $(window).on('resize.DT-' + oSettings.sInstance, _fnThrottle(function () {
          _fnAdjustColumnSizing(oSettings);
        }));
      };if (ie67) {
        setTimeout(bindResize, 1000);
      } else {
        bindResize();
      }oSettings._reszEvt = true;
    }
  }var _fnThrottle = DataTable.util.throttle;function _fnConvertToWidth(width, parent) {
    if (!width) {
      return 0;
    }var n = $('<div/>').css('width', _fnStringToCss(width)).appendTo(parent || document.body);var val = n[0].offsetWidth;n.remove();return val;
  }function _fnGetWidestNode(settings, colIdx) {
    var idx = _fnGetMaxLenString(settings, colIdx);if (idx < 0) {
      return null;
    }var data = settings.aoData[idx];return !data.nTr ? $('<td/>').html(_fnGetCellData(settings, idx, colIdx, 'display'))[0] : data.anCells[colIdx];
  }function _fnGetMaxLenString(settings, colIdx) {
    var s,
        max = -1,
        maxIdx = -1;for (var i = 0, ien = settings.aoData.length; i < ien; i++) {
      s = _fnGetCellData(settings, i, colIdx, 'display') + '';s = s.replace(__re_html_remove, '');s = s.replace(/&nbsp;/g, ' ');if (s.length > max) {
        max = s.length;maxIdx = i;
      }
    }return maxIdx;
  }function _fnStringToCss(s) {
    if (s === null) {
      return '0px';
    }if (typeof s == 'number') {
      return s < 0 ? '0px' : s + 'px';
    }return s.match(/\d$/) ? s + 'px' : s;
  }function _fnSortFlatten(settings) {
    var i,
        iLen,
        k,
        kLen,
        aSort = [],
        aiOrig = [],
        aoColumns = settings.aoColumns,
        aDataSort,
        iCol,
        sType,
        srcCol,
        fixed = settings.aaSortingFixed,
        fixedObj = $.isPlainObject(fixed),
        nestedSort = [],
        add = function add(a) {
      if (a.length && !$.isArray(a[0])) {
        nestedSort.push(a);
      } else {
        $.merge(nestedSort, a);
      }
    };if ($.isArray(fixed)) {
      add(fixed);
    }if (fixedObj && fixed.pre) {
      add(fixed.pre);
    }add(settings.aaSorting);if (fixedObj && fixed.post) {
      add(fixed.post);
    }for (i = 0; i < nestedSort.length; i++) {
      srcCol = nestedSort[i][0];aDataSort = aoColumns[srcCol].aDataSort;for (k = 0, kLen = aDataSort.length; k < kLen; k++) {
        iCol = aDataSort[k];sType = aoColumns[iCol].sType || 'string';if (nestedSort[i]._idx === undefined) {
          nestedSort[i]._idx = $.inArray(nestedSort[i][1], aoColumns[iCol].asSorting);
        }aSort.push({ src: srcCol, col: iCol, dir: nestedSort[i][1], index: nestedSort[i]._idx, type: sType, formatter: DataTable.ext.type.order[sType + "-pre"] });
      }
    }return aSort;
  }function _fnSort(oSettings) {
    var i,
        ien,
        iLen,
        j,
        jLen,
        k,
        kLen,
        sDataType,
        nTh,
        aiOrig = [],
        oExtSort = DataTable.ext.type.order,
        aoData = oSettings.aoData,
        aoColumns = oSettings.aoColumns,
        aDataSort,
        data,
        iCol,
        sType,
        oSort,
        formatters = 0,
        sortCol,
        displayMaster = oSettings.aiDisplayMaster,
        aSort;_fnColumnTypes(oSettings);aSort = _fnSortFlatten(oSettings);for (i = 0, ien = aSort.length; i < ien; i++) {
      sortCol = aSort[i];if (sortCol.formatter) {
        formatters++;
      }_fnSortData(oSettings, sortCol.col);
    }if (_fnDataSource(oSettings) != 'ssp' && aSort.length !== 0) {
      for (i = 0, iLen = displayMaster.length; i < iLen; i++) {
        aiOrig[displayMaster[i]] = i;
      }if (formatters === aSort.length) {
        displayMaster.sort(function (a, b) {
          var x,
              y,
              k,
              test,
              sort,
              len = aSort.length,
              dataA = aoData[a]._aSortData,
              dataB = aoData[b]._aSortData;for (k = 0; k < len; k++) {
            sort = aSort[k];x = dataA[sort.col];y = dataB[sort.col];test = x < y ? -1 : x > y ? 1 : 0;if (test !== 0) {
              return sort.dir === 'asc' ? test : -test;
            }
          }x = aiOrig[a];y = aiOrig[b];return x < y ? -1 : x > y ? 1 : 0;
        });
      } else {
        displayMaster.sort(function (a, b) {
          var x,
              y,
              k,
              l,
              test,
              sort,
              fn,
              len = aSort.length,
              dataA = aoData[a]._aSortData,
              dataB = aoData[b]._aSortData;for (k = 0; k < len; k++) {
            sort = aSort[k];x = dataA[sort.col];y = dataB[sort.col];fn = oExtSort[sort.type + "-" + sort.dir] || oExtSort["string-" + sort.dir];test = fn(x, y);if (test !== 0) {
              return test;
            }
          }x = aiOrig[a];y = aiOrig[b];return x < y ? -1 : x > y ? 1 : 0;
        });
      }
    }oSettings.bSorted = true;
  }function _fnSortAria(settings) {
    var label;var nextSort;var columns = settings.aoColumns;var aSort = _fnSortFlatten(settings);var oAria = settings.oLanguage.oAria;for (var i = 0, iLen = columns.length; i < iLen; i++) {
      var col = columns[i];var asSorting = col.asSorting;var sTitle = col.sTitle.replace(/<.*?>/g, "");var th = col.nTh;th.removeAttribute('aria-sort');if (col.bSortable) {
        if (aSort.length > 0 && aSort[0].col == i) {
          th.setAttribute('aria-sort', aSort[0].dir == "asc" ? "ascending" : "descending");nextSort = asSorting[aSort[0].index + 1] || asSorting[0];
        } else {
          nextSort = asSorting[0];
        }label = sTitle + (nextSort === "asc" ? oAria.sSortAscending : oAria.sSortDescending);
      } else {
        label = sTitle;
      }th.setAttribute('aria-label', label);
    }
  }function _fnSortListener(settings, colIdx, append, callback) {
    var col = settings.aoColumns[colIdx];var sorting = settings.aaSorting;var asSorting = col.asSorting;var nextSortIdx;var next = function next(a, overflow) {
      var idx = a._idx;if (idx === undefined) {
        idx = $.inArray(a[1], asSorting);
      }return idx + 1 < asSorting.length ? idx + 1 : overflow ? null : 0;
    };if (typeof sorting[0] === 'number') {
      sorting = settings.aaSorting = [sorting];
    }if (append && settings.oFeatures.bSortMulti) {
      var sortIdx = $.inArray(colIdx, _pluck(sorting, '0'));if (sortIdx !== -1) {
        nextSortIdx = next(sorting[sortIdx], true);if (nextSortIdx === null && sorting.length === 1) {
          nextSortIdx = 0;
        }if (nextSortIdx === null) {
          sorting.splice(sortIdx, 1);
        } else {
          sorting[sortIdx][1] = asSorting[nextSortIdx];sorting[sortIdx]._idx = nextSortIdx;
        }
      } else {
        sorting.push([colIdx, asSorting[0], 0]);sorting[sorting.length - 1]._idx = 0;
      }
    } else if (sorting.length && sorting[0][0] == colIdx) {
      nextSortIdx = next(sorting[0]);sorting.length = 1;sorting[0][1] = asSorting[nextSortIdx];sorting[0]._idx = nextSortIdx;
    } else {
      sorting.length = 0;sorting.push([colIdx, asSorting[0]]);sorting[0]._idx = 0;
    }_fnReDraw(settings);if (typeof callback == 'function') {
      callback(settings);
    }
  }function _fnSortAttachListener(settings, attachTo, colIdx, callback) {
    var col = settings.aoColumns[colIdx];_fnBindAction(attachTo, {}, function (e) {
      if (col.bSortable === false) {
        return;
      }if (settings.oFeatures.bProcessing) {
        _fnProcessingDisplay(settings, true);setTimeout(function () {
          _fnSortListener(settings, colIdx, e.shiftKey, callback);if (_fnDataSource(settings) !== 'ssp') {
            _fnProcessingDisplay(settings, false);
          }
        }, 0);
      } else {
        _fnSortListener(settings, colIdx, e.shiftKey, callback);
      }
    });
  }function _fnSortingClasses(settings) {
    var oldSort = settings.aLastSort;var sortClass = settings.oClasses.sSortColumn;var sort = _fnSortFlatten(settings);var features = settings.oFeatures;var i, ien, colIdx;if (features.bSort && features.bSortClasses) {
      for (i = 0, ien = oldSort.length; i < ien; i++) {
        colIdx = oldSort[i].src;$(_pluck(settings.aoData, 'anCells', colIdx)).removeClass(sortClass + (i < 2 ? i + 1 : 3));
      }for (i = 0, ien = sort.length; i < ien; i++) {
        colIdx = sort[i].src;$(_pluck(settings.aoData, 'anCells', colIdx)).addClass(sortClass + (i < 2 ? i + 1 : 3));
      }
    }settings.aLastSort = sort;
  }function _fnSortData(settings, idx) {
    var column = settings.aoColumns[idx];var customSort = DataTable.ext.order[column.sSortDataType];var customData;if (customSort) {
      customData = customSort.call(settings.oInstance, settings, idx, _fnColumnIndexToVisible(settings, idx));
    }var row, cellData;var formatter = DataTable.ext.type.order[column.sType + "-pre"];for (var i = 0, ien = settings.aoData.length; i < ien; i++) {
      row = settings.aoData[i];if (!row._aSortData) {
        row._aSortData = [];
      }if (!row._aSortData[idx] || customSort) {
        cellData = customSort ? customData[i] : _fnGetCellData(settings, i, idx, 'sort');row._aSortData[idx] = formatter ? formatter(cellData) : cellData;
      }
    }
  }function _fnSaveState(settings) {
    if (!settings.oFeatures.bStateSave || settings.bDestroying) {
      return;
    }var state = { time: +new Date(), start: settings._iDisplayStart, length: settings._iDisplayLength, order: $.extend(true, [], settings.aaSorting), search: _fnSearchToCamel(settings.oPreviousSearch), columns: $.map(settings.aoColumns, function (col, i) {
        return { visible: col.bVisible, search: _fnSearchToCamel(settings.aoPreSearchCols[i]) };
      }) };_fnCallbackFire(settings, "aoStateSaveParams", 'stateSaveParams', [settings, state]);settings.oSavedState = state;settings.fnStateSaveCallback.call(settings.oInstance, settings, state);
  }function _fnLoadState(settings, oInit, callback) {
    var i, ien;var columns = settings.aoColumns;var loaded = function loaded(s) {
      if (!s || !s.time) {
        callback();return;
      }var abStateLoad = _fnCallbackFire(settings, 'aoStateLoadParams', 'stateLoadParams', [settings, s]);if ($.inArray(false, abStateLoad) !== -1) {
        callback();return;
      }var duration = settings.iStateDuration;if (duration > 0 && s.time < +new Date() - duration * 1000) {
        callback();return;
      }if (s.columns && columns.length !== s.columns.length) {
        callback();return;
      }settings.oLoadedState = $.extend(true, {}, s);if (s.start !== undefined) {
        settings._iDisplayStart = s.start;settings.iInitDisplayStart = s.start;
      }if (s.length !== undefined) {
        settings._iDisplayLength = s.length;
      }if (s.order !== undefined) {
        settings.aaSorting = [];$.each(s.order, function (i, col) {
          settings.aaSorting.push(col[0] >= columns.length ? [0, col[1]] : col);
        });
      }if (s.search !== undefined) {
        $.extend(settings.oPreviousSearch, _fnSearchToHung(s.search));
      }if (s.columns) {
        for (i = 0, ien = s.columns.length; i < ien; i++) {
          var col = s.columns[i];if (col.visible !== undefined) {
            columns[i].bVisible = col.visible;
          }if (col.search !== undefined) {
            $.extend(settings.aoPreSearchCols[i], _fnSearchToHung(col.search));
          }
        }
      }_fnCallbackFire(settings, 'aoStateLoaded', 'stateLoaded', [settings, s]);callback();
    };
    if (!settings.oFeatures.bStateSave) {
      callback();return;
    }var state = settings.fnStateLoadCallback.call(settings.oInstance, settings, loaded);if (state !== undefined) {
      loaded(state);
    }
  }function _fnSettingsFromNode(table) {
    var settings = DataTable.settings;var idx = $.inArray(table, _pluck(settings, 'nTable'));return idx !== -1 ? settings[idx] : null;
  }function _fnLog(settings, level, msg, tn) {
    msg = 'DataTables warning: ' + (settings ? 'table id=' + settings.sTableId + ' - ' : '') + msg;if (tn) {
      msg += '. For more information about this error, please see ' + 'http://datatables.net/tn/' + tn;
    }if (!level) {
      var ext = DataTable.ext;var type = ext.sErrMode || ext.errMode;if (settings) {
        _fnCallbackFire(settings, null, 'error', [settings, tn, msg]);
      }if (type == 'alert') {
        alert(msg);
      } else if (type == 'throw') {
        throw new Error(msg);
      } else if (typeof type == 'function') {
        type(settings, tn, msg);
      }
    } else if (window.console && console.log) {
      console.log(msg);
    }
  }function _fnMap(ret, src, name, mappedName) {
    if ($.isArray(name)) {
      $.each(name, function (i, val) {
        if ($.isArray(val)) {
          _fnMap(ret, src, val[0], val[1]);
        } else {
          _fnMap(ret, src, val);
        }
      });return;
    }if (mappedName === undefined) {
      mappedName = name;
    }if (src[name] !== undefined) {
      ret[mappedName] = src[name];
    }
  }function _fnExtend(out, extender, breakRefs) {
    var val;for (var prop in extender) {
      if (extender.hasOwnProperty(prop)) {
        val = extender[prop];if ($.isPlainObject(val)) {
          if (!$.isPlainObject(out[prop])) {
            out[prop] = {};
          }$.extend(true, out[prop], val);
        } else if (breakRefs && prop !== 'data' && prop !== 'aaData' && $.isArray(val)) {
          out[prop] = val.slice();
        } else {
          out[prop] = val;
        }
      }
    }return out;
  }function _fnBindAction(n, oData, fn) {
    $(n).on('click.DT', oData, function (e) {
      n.blur();fn(e);
    }).on('keypress.DT', oData, function (e) {
      if (e.which === 13) {
        e.preventDefault();fn(e);
      }
    }).on('selectstart.DT', function () {
      return false;
    });
  }function _fnCallbackReg(oSettings, sStore, fn, sName) {
    if (fn) {
      oSettings[sStore].push({ "fn": fn, "sName": sName });
    }
  }function _fnCallbackFire(settings, callbackArr, eventName, args) {
    var ret = [];if (callbackArr) {
      ret = $.map(settings[callbackArr].slice().reverse(), function (val, i) {
        return val.fn.apply(settings.oInstance, args);
      });
    }if (eventName !== null) {
      var e = $.Event(eventName + '.dt');$(settings.nTable).trigger(e, args);ret.push(e.result);
    }return ret;
  }function _fnLengthOverflow(settings) {
    var start = settings._iDisplayStart,
        end = settings.fnDisplayEnd(),
        len = settings._iDisplayLength;if (start >= end) {
      start = end - len;
    }start -= start % len;if (len === -1 || start < 0) {
      start = 0;
    }settings._iDisplayStart = start;
  }function _fnRenderer(settings, type) {
    var renderer = settings.renderer;var host = DataTable.ext.renderer[type];if ($.isPlainObject(renderer) && renderer[type]) {
      return host[renderer[type]] || host._;
    } else if (typeof renderer === 'string') {
      return host[renderer] || host._;
    }return host._;
  }function _fnDataSource(settings) {
    if (settings.oFeatures.bServerSide) {
      return 'ssp';
    } else if (settings.ajax || settings.sAjaxSource) {
      return 'ajax';
    }return 'dom';
  }var __apiStruct = [];var __arrayProto = Array.prototype;var _toSettings = function _toSettings(mixed) {
    var idx, jq;var settings = DataTable.settings;var tables = $.map(settings, function (el, i) {
      return el.nTable;
    });if (!mixed) {
      return [];
    } else if (mixed.nTable && mixed.oApi) {
      return [mixed];
    } else if (mixed.nodeName && mixed.nodeName.toLowerCase() === 'table') {
      idx = $.inArray(mixed, tables);return idx !== -1 ? [settings[idx]] : null;
    } else if (mixed && typeof mixed.settings === 'function') {
      return mixed.settings().toArray();
    } else if (typeof mixed === 'string') {
      jq = $(mixed);
    } else if (mixed instanceof $) {
      jq = mixed;
    }if (jq) {
      return jq.map(function (i) {
        idx = $.inArray(this, tables);return idx !== -1 ? settings[idx] : null;
      }).toArray();
    }
  };_Api2 = function _Api(context, data) {
    if (!(this instanceof _Api2)) {
      return new _Api2(context, data);
    }var settings = [];var ctxSettings = function ctxSettings(o) {
      var a = _toSettings(o);if (a) {
        settings = settings.concat(a);
      }
    };if ($.isArray(context)) {
      for (var i = 0, ien = context.length; i < ien; i++) {
        ctxSettings(context[i]);
      }
    } else {
      ctxSettings(context);
    }this.context = _unique(settings);if (data) {
      $.merge(this, data);
    }this.selector = { rows: null, cols: null, opts: null };_Api2.extend(this, this, __apiStruct);
  };DataTable.Api = _Api2;$.extend(_Api2.prototype, { any: function any() {
      return this.count() !== 0;
    }, concat: __arrayProto.concat, context: [], count: function count() {
      return this.flatten().length;
    }, each: function each(fn) {
      for (var i = 0, ien = this.length; i < ien; i++) {
        fn.call(this, this[i], i, this);
      }return this;
    }, eq: function eq(idx) {
      var ctx = this.context;return ctx.length > idx ? new _Api2(ctx[idx], this[idx]) : null;
    }, filter: function filter(fn) {
      var a = [];if (__arrayProto.filter) {
        a = __arrayProto.filter.call(this, fn, this);
      } else {
        for (var i = 0, ien = this.length; i < ien; i++) {
          if (fn.call(this, this[i], i, this)) {
            a.push(this[i]);
          }
        }
      }return new _Api2(this.context, a);
    }, flatten: function flatten() {
      var a = [];return new _Api2(this.context, a.concat.apply(a, this.toArray()));
    }, join: __arrayProto.join, indexOf: __arrayProto.indexOf || function (obj, start) {
      for (var i = start || 0, ien = this.length; i < ien; i++) {
        if (this[i] === obj) {
          return i;
        }
      }return -1;
    }, iterator: function iterator(flatten, type, fn, alwaysNew) {
      var a = [],
          ret,
          i,
          ien,
          j,
          jen,
          context = this.context,
          rows,
          items,
          item,
          selector = this.selector;if (typeof flatten === 'string') {
        alwaysNew = fn;fn = type;type = flatten;flatten = false;
      }for (i = 0, ien = context.length; i < ien; i++) {
        var apiInst = new _Api2(context[i]);if (type === 'table') {
          ret = fn.call(apiInst, context[i], i);if (ret !== undefined) {
            a.push(ret);
          }
        } else if (type === 'columns' || type === 'rows') {
          ret = fn.call(apiInst, context[i], this[i], i);if (ret !== undefined) {
            a.push(ret);
          }
        } else if (type === 'column' || type === 'column-rows' || type === 'row' || type === 'cell') {
          items = this[i];if (type === 'column-rows') {
            rows = _selector_row_indexes(context[i], selector.opts);
          }for (j = 0, jen = items.length; j < jen; j++) {
            item = items[j];if (type === 'cell') {
              ret = fn.call(apiInst, context[i], item.row, item.column, i, j);
            } else {
              ret = fn.call(apiInst, context[i], item, i, j, rows);
            }if (ret !== undefined) {
              a.push(ret);
            }
          }
        }
      }if (a.length || alwaysNew) {
        var api = new _Api2(context, flatten ? a.concat.apply([], a) : a);var apiSelector = api.selector;apiSelector.rows = selector.rows;apiSelector.cols = selector.cols;apiSelector.opts = selector.opts;return api;
      }return this;
    }, lastIndexOf: __arrayProto.lastIndexOf || function (obj, start) {
      return this.indexOf.apply(this.toArray.reverse(), arguments);
    }, length: 0, map: function map(fn) {
      var a = [];if (__arrayProto.map) {
        a = __arrayProto.map.call(this, fn, this);
      } else {
        for (var i = 0, ien = this.length; i < ien; i++) {
          a.push(fn.call(this, this[i], i));
        }
      }return new _Api2(this.context, a);
    }, pluck: function pluck(prop) {
      return this.map(function (el) {
        return el[prop];
      });
    }, pop: __arrayProto.pop, push: __arrayProto.push, reduce: __arrayProto.reduce || function (fn, init) {
      return _fnReduce(this, fn, init, 0, this.length, 1);
    }, reduceRight: __arrayProto.reduceRight || function (fn, init) {
      return _fnReduce(this, fn, init, this.length - 1, -1, -1);
    }, reverse: __arrayProto.reverse, selector: null, shift: __arrayProto.shift, slice: function slice() {
      return new _Api2(this.context, this);
    }, sort: __arrayProto.sort, splice: __arrayProto.splice, toArray: function toArray() {
      return __arrayProto.slice.call(this);
    }, to$: function to$() {
      return $(this);
    }, toJQuery: function toJQuery() {
      return $(this);
    }, unique: function unique() {
      return new _Api2(this.context, _unique(this));
    }, unshift: __arrayProto.unshift });_Api2.extend = function (scope, obj, ext) {
    if (!ext.length || !obj || !(obj instanceof _Api2) && !obj.__dt_wrapper) {
      return;
    }var i,
        ien,
        j,
        jen,
        struct,
        inner,
        methodScoping = function methodScoping(scope, fn, struc) {
      return function () {
        var ret = fn.apply(scope, arguments);_Api2.extend(ret, ret, struc.methodExt);return ret;
      };
    };for (i = 0, ien = ext.length; i < ien; i++) {
      struct = ext[i];obj[struct.name] = typeof struct.val === 'function' ? methodScoping(scope, struct.val, struct) : $.isPlainObject(struct.val) ? {} : struct.val;obj[struct.name].__dt_wrapper = true;_Api2.extend(scope, obj[struct.name], struct.propExt);
    }
  };_Api2.register = _api_register = function _api_register(name, val) {
    if ($.isArray(name)) {
      for (var j = 0, jen = name.length; j < jen; j++) {
        _Api2.register(name[j], val);
      }return;
    }var i,
        ien,
        heir = name.split('.'),
        struct = __apiStruct,
        key,
        method;var find = function find(src, name) {
      for (var i = 0, ien = src.length; i < ien; i++) {
        if (src[i].name === name) {
          return src[i];
        }
      }return null;
    };for (i = 0, ien = heir.length; i < ien; i++) {
      method = heir[i].indexOf('()') !== -1;key = method ? heir[i].replace('()', '') : heir[i];var src = find(struct, key);if (!src) {
        src = { name: key, val: {}, methodExt: [], propExt: [] };struct.push(src);
      }if (i === ien - 1) {
        src.val = val;
      } else {
        struct = method ? src.methodExt : src.propExt;
      }
    }
  };_Api2.registerPlural = _api_registerPlural = function _api_registerPlural(pluralName, singularName, val) {
    _Api2.register(pluralName, val);_Api2.register(singularName, function () {
      var ret = val.apply(this, arguments);if (ret === this) {
        return this;
      } else if (ret instanceof _Api2) {
        return ret.length ? $.isArray(ret[0]) ? new _Api2(ret.context, ret[0]) : ret[0] : undefined;
      }return ret;
    });
  };var __table_selector = function __table_selector(selector, a) {
    if (typeof selector === 'number') {
      return [a[selector]];
    }var nodes = $.map(a, function (el, i) {
      return el.nTable;
    });return $(nodes).filter(selector).map(function (i) {
      var idx = $.inArray(this, nodes);return a[idx];
    }).toArray();
  };_api_register('tables()', function (selector) {
    return selector ? new _Api2(__table_selector(selector, this.context)) : this;
  });_api_register('table()', function (selector) {
    var tables = this.tables(selector);var ctx = tables.context;return ctx.length ? new _Api2(ctx[0]) : tables;
  });_api_registerPlural('tables().nodes()', 'table().node()', function () {
    return this.iterator('table', function (ctx) {
      return ctx.nTable;
    }, 1);
  });_api_registerPlural('tables().body()', 'table().body()', function () {
    return this.iterator('table', function (ctx) {
      return ctx.nTBody;
    }, 1);
  });_api_registerPlural('tables().header()', 'table().header()', function () {
    return this.iterator('table', function (ctx) {
      return ctx.nTHead;
    }, 1);
  });_api_registerPlural('tables().footer()', 'table().footer()', function () {
    return this.iterator('table', function (ctx) {
      return ctx.nTFoot;
    }, 1);
  });_api_registerPlural('tables().containers()', 'table().container()', function () {
    return this.iterator('table', function (ctx) {
      return ctx.nTableWrapper;
    }, 1);
  });_api_register('draw()', function (paging) {
    return this.iterator('table', function (settings) {
      if (paging === 'page') {
        _fnDraw(settings);
      } else {
        if (typeof paging === 'string') {
          paging = paging === 'full-hold' ? false : true;
        }_fnReDraw(settings, paging === false);
      }
    });
  });_api_register('page()', function (action) {
    if (action === undefined) {
      return this.page.info().page;
    }return this.iterator('table', function (settings) {
      _fnPageChange(settings, action);
    });
  });_api_register('page.info()', function (action) {
    if (this.context.length === 0) {
      return undefined;
    }var settings = this.context[0],
        start = settings._iDisplayStart,
        len = settings.oFeatures.bPaginate ? settings._iDisplayLength : -1,
        visRecords = settings.fnRecordsDisplay(),
        all = len === -1;return { "page": all ? 0 : Math.floor(start / len), "pages": all ? 1 : Math.ceil(visRecords / len), "start": start, "end": settings.fnDisplayEnd(), "length": len, "recordsTotal": settings.fnRecordsTotal(), "recordsDisplay": visRecords, "serverSide": _fnDataSource(settings) === 'ssp' };
  });_api_register('page.len()', function (len) {
    if (len === undefined) {
      return this.context.length !== 0 ? this.context[0]._iDisplayLength : undefined;
    }return this.iterator('table', function (settings) {
      _fnLengthChange(settings, len);
    });
  });var __reload = function __reload(settings, holdPosition, callback) {
    if (callback) {
      var api = new _Api2(settings);api.one('draw', function () {
        callback(api.ajax.json());
      });
    }if (_fnDataSource(settings) == 'ssp') {
      _fnReDraw(settings, holdPosition);
    } else {
      _fnProcessingDisplay(settings, true);var xhr = settings.jqXHR;if (xhr && xhr.readyState !== 4) {
        xhr.abort();
      }_fnBuildAjax(settings, [], function (json) {
        _fnClearTable(settings);var data = _fnAjaxDataSrc(settings, json);for (var i = 0, ien = data.length; i < ien; i++) {
          _fnAddData(settings, data[i]);
        }_fnReDraw(settings, holdPosition);_fnProcessingDisplay(settings, false);
      });
    }
  };_api_register('ajax.json()', function () {
    var ctx = this.context;if (ctx.length > 0) {
      return ctx[0].json;
    }
  });_api_register('ajax.params()', function () {
    var ctx = this.context;if (ctx.length > 0) {
      return ctx[0].oAjaxData;
    }
  });_api_register('ajax.reload()', function (callback, resetPaging) {
    return this.iterator('table', function (settings) {
      __reload(settings, resetPaging === false, callback);
    });
  });_api_register('ajax.url()', function (url) {
    var ctx = this.context;if (url === undefined) {
      if (ctx.length === 0) {
        return undefined;
      }ctx = ctx[0];return ctx.ajax ? $.isPlainObject(ctx.ajax) ? ctx.ajax.url : ctx.ajax : ctx.sAjaxSource;
    }return this.iterator('table', function (settings) {
      if ($.isPlainObject(settings.ajax)) {
        settings.ajax.url = url;
      } else {
        settings.ajax = url;
      }
    });
  });_api_register('ajax.url().load()', function (callback, resetPaging) {
    return this.iterator('table', function (ctx) {
      __reload(ctx, resetPaging === false, callback);
    });
  });var _selector_run = function _selector_run(type, selector, selectFn, settings, opts) {
    var out = [],
        res,
        a,
        i,
        ien,
        j,
        jen,
        selectorType = typeof selector === 'undefined' ? 'undefined' : _typeof(selector);if (!selector || selectorType === 'string' || selectorType === 'function' || selector.length === undefined) {
      selector = [selector];
    }for (i = 0, ien = selector.length; i < ien; i++) {
      a = selector[i] && selector[i].split && !selector[i].match(/[\[\(:]/) ? selector[i].split(',') : [selector[i]];for (j = 0, jen = a.length; j < jen; j++) {
        res = selectFn(typeof a[j] === 'string' ? $.trim(a[j]) : a[j]);if (res && res.length) {
          out = out.concat(res);
        }
      }
    }var ext = _ext.selector[type];if (ext.length) {
      for (i = 0, ien = ext.length; i < ien; i++) {
        out = ext[i](settings, opts, out);
      }
    }return _unique(out);
  };var _selector_opts = function _selector_opts(opts) {
    if (!opts) {
      opts = {};
    }if (opts.filter && opts.search === undefined) {
      opts.search = opts.filter;
    }return $.extend({ search: 'none', order: 'current', page: 'all' }, opts);
  };var _selector_first = function _selector_first(inst) {
    for (var i = 0, ien = inst.length; i < ien; i++) {
      if (inst[i].length > 0) {
        inst[0] = inst[i];inst[0].length = 1;inst.length = 1;inst.context = [inst.context[i]];return inst;
      }
    }inst.length = 0;return inst;
  };var _selector_row_indexes = function _selector_row_indexes(settings, opts) {
    var i,
        ien,
        tmp,
        a = [],
        displayFiltered = settings.aiDisplay,
        displayMaster = settings.aiDisplayMaster;var search = opts.search,
        order = opts.order,
        page = opts.page;if (_fnDataSource(settings) == 'ssp') {
      return search === 'removed' ? [] : _range(0, displayMaster.length);
    } else if (page == 'current') {
      for (i = settings._iDisplayStart, ien = settings.fnDisplayEnd(); i < ien; i++) {
        a.push(displayFiltered[i]);
      }
    } else if (order == 'current' || order == 'applied') {
      a = search == 'none' ? displayMaster.slice() : search == 'applied' ? displayFiltered.slice() : $.map(displayMaster, function (el, i) {
        return $.inArray(el, displayFiltered) === -1 ? el : null;
      });
    } else if (order == 'index' || order == 'original') {
      for (i = 0, ien = settings.aoData.length; i < ien; i++) {
        if (search == 'none') {
          a.push(i);
        } else {
          tmp = $.inArray(i, displayFiltered);if (tmp === -1 && search == 'removed' || tmp >= 0 && search == 'applied') {
            a.push(i);
          }
        }
      }
    }return a;
  };var __row_selector = function __row_selector(settings, selector, opts) {
    var rows;var run = function run(sel) {
      var selInt = _intVal(sel);var i, ien;if (selInt !== null && !opts) {
        return [selInt];
      }if (!rows) {
        rows = _selector_row_indexes(settings, opts);
      }if (selInt !== null && $.inArray(selInt, rows) !== -1) {
        return [selInt];
      } else if (sel === null || sel === undefined || sel === '') {
        return rows;
      }if (typeof sel === 'function') {
        return $.map(rows, function (idx) {
          var row = settings.aoData[idx];return sel(idx, row._aData, row.nTr) ? idx : null;
        });
      }var nodes = _removeEmpty(_pluck_order(settings.aoData, rows, 'nTr'));if (sel.nodeName) {
        if (sel._DT_RowIndex !== undefined) {
          return [sel._DT_RowIndex];
        } else if (sel._DT_CellIndex) {
          return [sel._DT_CellIndex.row];
        } else {
          var host = $(sel).closest('*[data-dt-row]');return host.length ? [host.data('dt-row')] : [];
        }
      }if (typeof sel === 'string' && sel.charAt(0) === '#') {
        var rowObj = settings.aIds[sel.replace(/^#/, '')];if (rowObj !== undefined) {
          return [rowObj.idx];
        }
      }return $(nodes).filter(sel).map(function () {
        return this._DT_RowIndex;
      }).toArray();
    };return _selector_run('row', selector, run, settings, opts);
  };_api_register('rows()', function (selector, opts) {
    if (selector === undefined) {
      selector = '';
    } else if ($.isPlainObject(selector)) {
      opts = selector;selector = '';
    }opts = _selector_opts(opts);var inst = this.iterator('table', function (settings) {
      return __row_selector(settings, selector, opts);
    }, 1);inst.selector.rows = selector;inst.selector.opts = opts;return inst;
  });_api_register('rows().nodes()', function () {
    return this.iterator('row', function (settings, row) {
      return settings.aoData[row].nTr || undefined;
    }, 1);
  });_api_register('rows().data()', function () {
    return this.iterator(true, 'rows', function (settings, rows) {
      return _pluck_order(settings.aoData, rows, '_aData');
    }, 1);
  });_api_registerPlural('rows().cache()', 'row().cache()', function (type) {
    return this.iterator('row', function (settings, row) {
      var r = settings.aoData[row];return type === 'search' ? r._aFilterData : r._aSortData;
    }, 1);
  });_api_registerPlural('rows().invalidate()', 'row().invalidate()', function (src) {
    return this.iterator('row', function (settings, row) {
      _fnInvalidate(settings, row, src);
    });
  });_api_registerPlural('rows().indexes()', 'row().index()', function () {
    return this.iterator('row', function (settings, row) {
      return row;
    }, 1);
  });_api_registerPlural('rows().ids()', 'row().id()', function (hash) {
    var a = [];var context = this.context;for (var i = 0, ien = context.length; i < ien; i++) {
      for (var j = 0, jen = this[i].length; j < jen; j++) {
        var id = context[i].rowIdFn(context[i].aoData[this[i][j]]._aData);a.push((hash === true ? '#' : '') + id);
      }
    }return new _Api2(context, a);
  });_api_registerPlural('rows().remove()', 'row().remove()', function () {
    var that = this;this.iterator('row', function (settings, row, thatIdx) {
      var data = settings.aoData;var rowData = data[row];var i, ien, j, jen;var loopRow, loopCells;data.splice(row, 1);for (i = 0, ien = data.length; i < ien; i++) {
        loopRow = data[i];loopCells = loopRow.anCells;if (loopRow.nTr !== null) {
          loopRow.nTr._DT_RowIndex = i;
        }if (loopCells !== null) {
          for (j = 0, jen = loopCells.length; j < jen; j++) {
            loopCells[j]._DT_CellIndex.row = i;
          }
        }
      }_fnDeleteIndex(settings.aiDisplayMaster, row);_fnDeleteIndex(settings.aiDisplay, row);_fnDeleteIndex(that[thatIdx], row, false);_fnLengthOverflow(settings);var id = settings.rowIdFn(rowData._aData);if (id !== undefined) {
        delete settings.aIds[id];
      }
    });this.iterator('table', function (settings) {
      for (var i = 0, ien = settings.aoData.length; i < ien; i++) {
        settings.aoData[i].idx = i;
      }
    });return this;
  });_api_register('rows.add()', function (rows) {
    var newRows = this.iterator('table', function (settings) {
      var row, i, ien;var out = [];for (i = 0, ien = rows.length; i < ien; i++) {
        row = rows[i];if (row.nodeName && row.nodeName.toUpperCase() === 'TR') {
          out.push(_fnAddTr(settings, row)[0]);
        } else {
          out.push(_fnAddData(settings, row));
        }
      }return out;
    }, 1);var modRows = this.rows(-1);modRows.pop();$.merge(modRows, newRows);return modRows;
  });_api_register('row()', function (selector, opts) {
    return _selector_first(this.rows(selector, opts));
  });_api_register('row().data()', function (data) {
    var ctx = this.context;if (data === undefined) {
      return ctx.length && this.length ? ctx[0].aoData[this[0]]._aData : undefined;
    }ctx[0].aoData[this[0]]._aData = data;_fnInvalidate(ctx[0], this[0], 'data');return this;
  });_api_register('row().node()', function () {
    var ctx = this.context;return ctx.length && this.length ? ctx[0].aoData[this[0]].nTr || null : null;
  });_api_register('row.add()', function (row) {
    if (row instanceof $ && row.length) {
      row = row[0];
    }var rows = this.iterator('table', function (settings) {
      if (row.nodeName && row.nodeName.toUpperCase() === 'TR') {
        return _fnAddTr(settings, row)[0];
      }return _fnAddData(settings, row);
    });return this.row(rows[0]);
  });var __details_add = function __details_add(ctx, row, data, klass) {
    var rows = [];var addRow = function addRow(r, k) {
      if ($.isArray(r) || r instanceof $) {
        for (var i = 0, ien = r.length; i < ien; i++) {
          addRow(r[i], k);
        }return;
      }if (r.nodeName && r.nodeName.toLowerCase() === 'tr') {
        rows.push(r);
      } else {
        var created = $('<tr><td/></tr>').addClass(k);$('td', created).addClass(k).html(r)[0].colSpan = _fnVisbleColumns(ctx);rows.push(created[0]);
      }
    };addRow(data, klass);if (row._details) {
      row._details.detach();
    }row._details = $(rows);if (row._detailsShow) {
      row._details.insertAfter(row.nTr);
    }
  };var __details_remove = function __details_remove(api, idx) {
    var ctx = api.context;if (ctx.length) {
      var row = ctx[0].aoData[idx !== undefined ? idx : api[0]];if (row && row._details) {
        row._details.remove();row._detailsShow = undefined;row._details = undefined;
      }
    }
  };var __details_display = function __details_display(api, show) {
    var ctx = api.context;if (ctx.length && api.length) {
      var row = ctx[0].aoData[api[0]];if (row._details) {
        row._detailsShow = show;if (show) {
          row._details.insertAfter(row.nTr);
        } else {
          row._details.detach();
        }__details_events(ctx[0]);
      }
    }
  };var __details_events = function __details_events(settings) {
    var api = new _Api2(settings);var namespace = '.dt.DT_details';var drawEvent = 'draw' + namespace;var colvisEvent = 'column-visibility' + namespace;var destroyEvent = 'destroy' + namespace;var data = settings.aoData;api.off(drawEvent + ' ' + colvisEvent + ' ' + destroyEvent);if (_pluck(data, '_details').length > 0) {
      api.on(drawEvent, function (e, ctx) {
        if (settings !== ctx) {
          return;
        }api.rows({ page: 'current' }).eq(0).each(function (idx) {
          var row = data[idx];if (row._detailsShow) {
            row._details.insertAfter(row.nTr);
          }
        });
      });api.on(colvisEvent, function (e, ctx, idx, vis) {
        if (settings !== ctx) {
          return;
        }var row,
            visible = _fnVisbleColumns(ctx);for (var i = 0, ien = data.length; i < ien; i++) {
          row = data[i];if (row._details) {
            row._details.children('td[colspan]').attr('colspan', visible);
          }
        }
      });api.on(destroyEvent, function (e, ctx) {
        if (settings !== ctx) {
          return;
        }for (var i = 0, ien = data.length; i < ien; i++) {
          if (data[i]._details) {
            __details_remove(api, i);
          }
        }
      });
    }
  };var _emp = '';var _child_obj = _emp + 'row().child';var _child_mth = _child_obj + '()';_api_register(_child_mth, function (data, klass) {
    var ctx = this.context;if (data === undefined) {
      return ctx.length && this.length ? ctx[0].aoData[this[0]]._details : undefined;
    } else if (data === true) {
      this.child.show();
    } else if (data === false) {
      __details_remove(this);
    } else if (ctx.length && this.length) {
      __details_add(ctx[0], ctx[0].aoData[this[0]], data, klass);
    }return this;
  });_api_register([_child_obj + '.show()', _child_mth + '.show()'], function (show) {
    __details_display(this, true);return this;
  });_api_register([_child_obj + '.hide()', _child_mth + '.hide()'], function () {
    __details_display(this, false);return this;
  });_api_register([_child_obj + '.remove()', _child_mth + '.remove()'], function () {
    __details_remove(this);return this;
  });_api_register(_child_obj + '.isShown()', function () {
    var ctx = this.context;if (ctx.length && this.length) {
      return ctx[0].aoData[this[0]]._detailsShow || false;
    }return false;
  });var __re_column_selector = /^([^:]+):(name|visIdx|visible)$/;var __columnData = function __columnData(settings, column, r1, r2, rows) {
    var a = [];for (var row = 0, ien = rows.length; row < ien; row++) {
      a.push(_fnGetCellData(settings, rows[row], column));
    }return a;
  };var __column_selector = function __column_selector(settings, selector, opts) {
    var columns = settings.aoColumns,
        names = _pluck(columns, 'sName'),
        nodes = _pluck(columns, 'nTh');var run = function run(s) {
      var selInt = _intVal(s);if (s === '') {
        return _range(columns.length);
      }if (selInt !== null) {
        return [selInt >= 0 ? selInt : columns.length + selInt];
      }if (typeof s === 'function') {
        var rows = _selector_row_indexes(settings, opts);return $.map(columns, function (col, idx) {
          return s(idx, __columnData(settings, idx, 0, 0, rows), nodes[idx]) ? idx : null;
        });
      }var match = typeof s === 'string' ? s.match(__re_column_selector) : '';if (match) {
        switch (match[2]) {case 'visIdx':case 'visible':
            var idx = parseInt(match[1], 10);if (idx < 0) {
              var visColumns = $.map(columns, function (col, i) {
                return col.bVisible ? i : null;
              });return [visColumns[visColumns.length + idx]];
            }return [_fnVisibleToColumnIndex(settings, idx)];case 'name':
            return $.map(names, function (name, i) {
              return name === match[1] ? i : null;
            });default:
            return [];}
      }if (s.nodeName && s._DT_CellIndex) {
        return [s._DT_CellIndex.column];
      }var jqResult = $(nodes).filter(s).map(function () {
        return $.inArray(this, nodes);
      }).toArray();if (jqResult.length || !s.nodeName) {
        return jqResult;
      }var host = $(s).closest('*[data-dt-column]');return host.length ? [host.data('dt-column')] : [];
    };return _selector_run('column', selector, run, settings, opts);
  };var __setColumnVis = function __setColumnVis(settings, column, vis) {
    var cols = settings.aoColumns,
        col = cols[column],
        data = settings.aoData,
        row,
        cells,
        i,
        ien,
        tr;if (vis === undefined) {
      return col.bVisible;
    }if (col.bVisible === vis) {
      return;
    }if (vis) {
      var insertBefore = $.inArray(true, _pluck(cols, 'bVisible'), column + 1);for (i = 0, ien = data.length; i < ien; i++) {
        tr = data[i].nTr;cells = data[i].anCells;if (tr) {
          tr.insertBefore(cells[column], cells[insertBefore] || null);
        }
      }
    } else {
      $(_pluck(settings.aoData, 'anCells', column)).detach();
    }col.bVisible = vis;_fnDrawHead(settings, settings.aoHeader);_fnDrawHead(settings, settings.aoFooter);_fnSaveState(settings);
  };_api_register('columns()', function (selector, opts) {
    if (selector === undefined) {
      selector = '';
    } else if ($.isPlainObject(selector)) {
      opts = selector;selector = '';
    }opts = _selector_opts(opts);var inst = this.iterator('table', function (settings) {
      return __column_selector(settings, selector, opts);
    }, 1);inst.selector.cols = selector;inst.selector.opts = opts;return inst;
  });_api_registerPlural('columns().header()', 'column().header()', function (selector, opts) {
    return this.iterator('column', function (settings, column) {
      return settings.aoColumns[column].nTh;
    }, 1);
  });_api_registerPlural('columns().footer()', 'column().footer()', function (selector, opts) {
    return this.iterator('column', function (settings, column) {
      return settings.aoColumns[column].nTf;
    }, 1);
  });_api_registerPlural('columns().data()', 'column().data()', function () {
    return this.iterator('column-rows', __columnData, 1);
  });_api_registerPlural('columns().dataSrc()', 'column().dataSrc()', function () {
    return this.iterator('column', function (settings, column) {
      return settings.aoColumns[column].mData;
    }, 1);
  });_api_registerPlural('columns().cache()', 'column().cache()', function (type) {
    return this.iterator('column-rows', function (settings, column, i, j, rows) {
      return _pluck_order(settings.aoData, rows, type === 'search' ? '_aFilterData' : '_aSortData', column);
    }, 1);
  });_api_registerPlural('columns().nodes()', 'column().nodes()', function () {
    return this.iterator('column-rows', function (settings, column, i, j, rows) {
      return _pluck_order(settings.aoData, rows, 'anCells', column);
    }, 1);
  });_api_registerPlural('columns().visible()', 'column().visible()', function (vis, calc) {
    var ret = this.iterator('column', function (settings, column) {
      if (vis === undefined) {
        return settings.aoColumns[column].bVisible;
      }__setColumnVis(settings, column, vis);
    });if (vis !== undefined) {
      this.iterator('column', function (settings, column) {
        _fnCallbackFire(settings, null, 'column-visibility', [settings, column, vis, calc]);
      });if (calc === undefined || calc) {
        this.columns.adjust();
      }
    }return ret;
  });_api_registerPlural('columns().indexes()', 'column().index()', function (type) {
    return this.iterator('column', function (settings, column) {
      return type === 'visible' ? _fnColumnIndexToVisible(settings, column) : column;
    }, 1);
  });_api_register('columns.adjust()', function () {
    return this.iterator('table', function (settings) {
      _fnAdjustColumnSizing(settings);
    }, 1);
  });_api_register('column.index()', function (type, idx) {
    if (this.context.length !== 0) {
      var ctx = this.context[0];if (type === 'fromVisible' || type === 'toData') {
        return _fnVisibleToColumnIndex(ctx, idx);
      } else if (type === 'fromData' || type === 'toVisible') {
        return _fnColumnIndexToVisible(ctx, idx);
      }
    }
  });_api_register('column()', function (selector, opts) {
    return _selector_first(this.columns(selector, opts));
  });var __cell_selector = function __cell_selector(settings, selector, opts) {
    var data = settings.aoData;var rows = _selector_row_indexes(settings, opts);var cells = _removeEmpty(_pluck_order(data, rows, 'anCells'));var allCells = $([].concat.apply([], cells));var row;var columns = settings.aoColumns.length;var a, i, ien, j, o, host;var run = function run(s) {
      var fnSelector = typeof s === 'function';if (s === null || s === undefined || fnSelector) {
        a = [];for (i = 0, ien = rows.length; i < ien; i++) {
          row = rows[i];for (j = 0; j < columns; j++) {
            o = { row: row, column: j };if (fnSelector) {
              host = data[row];if (s(o, _fnGetCellData(settings, row, j), host.anCells ? host.anCells[j] : null)) {
                a.push(o);
              }
            } else {
              a.push(o);
            }
          }
        }return a;
      }if ($.isPlainObject(s)) {
        return [s];
      }var jqResult = allCells.filter(s).map(function (i, el) {
        return { row: el._DT_CellIndex.row, column: el._DT_CellIndex.column };
      }).toArray();if (jqResult.length || !s.nodeName) {
        return jqResult;
      }host = $(s).closest('*[data-dt-row]');return host.length ? [{ row: host.data('dt-row'), column: host.data('dt-column') }] : [];
    };return _selector_run('cell', selector, run, settings, opts);
  };_api_register('cells()', function (rowSelector, columnSelector, opts) {
    if ($.isPlainObject(rowSelector)) {
      if (rowSelector.row === undefined) {
        opts = rowSelector;rowSelector = null;
      } else {
        opts = columnSelector;columnSelector = null;
      }
    }if ($.isPlainObject(columnSelector)) {
      opts = columnSelector;columnSelector = null;
    }if (columnSelector === null || columnSelector === undefined) {
      return this.iterator('table', function (settings) {
        return __cell_selector(settings, rowSelector, _selector_opts(opts));
      });
    }var columns = this.columns(columnSelector, opts);var rows = this.rows(rowSelector, opts);var a, i, ien, j, jen;var cells = this.iterator('table', function (settings, idx) {
      a = [];for (i = 0, ien = rows[idx].length; i < ien; i++) {
        for (j = 0, jen = columns[idx].length; j < jen; j++) {
          a.push({ row: rows[idx][i], column: columns[idx][j] });
        }
      }return a;
    }, 1);$.extend(cells.selector, { cols: columnSelector, rows: rowSelector, opts: opts });return cells;
  });_api_registerPlural('cells().nodes()', 'cell().node()', function () {
    return this.iterator('cell', function (settings, row, column) {
      var data = settings.aoData[row];return data && data.anCells ? data.anCells[column] : undefined;
    }, 1);
  });_api_register('cells().data()', function () {
    return this.iterator('cell', function (settings, row, column) {
      return _fnGetCellData(settings, row, column);
    }, 1);
  });_api_registerPlural('cells().cache()', 'cell().cache()', function (type) {
    type = type === 'search' ? '_aFilterData' : '_aSortData';return this.iterator('cell', function (settings, row, column) {
      return settings.aoData[row][type][column];
    }, 1);
  });_api_registerPlural('cells().render()', 'cell().render()', function (type) {
    return this.iterator('cell', function (settings, row, column) {
      return _fnGetCellData(settings, row, column, type);
    }, 1);
  });_api_registerPlural('cells().indexes()', 'cell().index()', function () {
    return this.iterator('cell', function (settings, row, column) {
      return { row: row, column: column, columnVisible: _fnColumnIndexToVisible(settings, column) };
    }, 1);
  });_api_registerPlural('cells().invalidate()', 'cell().invalidate()', function (src) {
    return this.iterator('cell', function (settings, row, column) {
      _fnInvalidate(settings, row, src, column);
    });
  });_api_register('cell()', function (rowSelector, columnSelector, opts) {
    return _selector_first(this.cells(rowSelector, columnSelector, opts));
  });_api_register('cell().data()', function (data) {
    var ctx = this.context;var cell = this[0];if (data === undefined) {
      return ctx.length && cell.length ? _fnGetCellData(ctx[0], cell[0].row, cell[0].column) : undefined;
    }_fnSetCellData(ctx[0], cell[0].row, cell[0].column, data);_fnInvalidate(ctx[0], cell[0].row, 'data', cell[0].column);return this;
  });_api_register('order()', function (order, dir) {
    var ctx = this.context;if (order === undefined) {
      return ctx.length !== 0 ? ctx[0].aaSorting : undefined;
    }if (typeof order === 'number') {
      order = [[order, dir]];
    } else if (order.length && !$.isArray(order[0])) {
      order = Array.prototype.slice.call(arguments);
    }return this.iterator('table', function (settings) {
      settings.aaSorting = order.slice();
    });
  });_api_register('order.listener()', function (node, column, callback) {
    return this.iterator('table', function (settings) {
      _fnSortAttachListener(settings, node, column, callback);
    });
  });_api_register('order.fixed()', function (set) {
    if (!set) {
      var ctx = this.context;var fixed = ctx.length ? ctx[0].aaSortingFixed : undefined;return $.isArray(fixed) ? { pre: fixed } : fixed;
    }return this.iterator('table', function (settings) {
      settings.aaSortingFixed = $.extend(true, {}, set);
    });
  });_api_register(['columns().order()', 'column().order()'], function (dir) {
    var that = this;return this.iterator('table', function (settings, i) {
      var sort = [];$.each(that[i], function (j, col) {
        sort.push([col, dir]);
      });settings.aaSorting = sort;
    });
  });_api_register('search()', function (input, regex, smart, caseInsen) {
    var ctx = this.context;if (input === undefined) {
      return ctx.length !== 0 ? ctx[0].oPreviousSearch.sSearch : undefined;
    }return this.iterator('table', function (settings) {
      if (!settings.oFeatures.bFilter) {
        return;
      }_fnFilterComplete(settings, $.extend({}, settings.oPreviousSearch, { "sSearch": input + "", "bRegex": regex === null ? false : regex, "bSmart": smart === null ? true : smart, "bCaseInsensitive": caseInsen === null ? true : caseInsen }), 1);
    });
  });_api_registerPlural('columns().search()', 'column().search()', function (input, regex, smart, caseInsen) {
    return this.iterator('column', function (settings, column) {
      var preSearch = settings.aoPreSearchCols;if (input === undefined) {
        return preSearch[column].sSearch;
      }if (!settings.oFeatures.bFilter) {
        return;
      }$.extend(preSearch[column], { "sSearch": input + "", "bRegex": regex === null ? false : regex, "bSmart": smart === null ? true : smart, "bCaseInsensitive": caseInsen === null ? true : caseInsen });_fnFilterComplete(settings, settings.oPreviousSearch, 1);
    });
  });_api_register('state()', function () {
    return this.context.length ? this.context[0].oSavedState : null;
  });_api_register('state.clear()', function () {
    return this.iterator('table', function (settings) {
      settings.fnStateSaveCallback.call(settings.oInstance, settings, {});
    });
  });_api_register('state.loaded()', function () {
    return this.context.length ? this.context[0].oLoadedState : null;
  });_api_register('state.save()', function () {
    return this.iterator('table', function (settings) {
      _fnSaveState(settings);
    });
  });DataTable.versionCheck = DataTable.fnVersionCheck = function (version) {
    var aThis = DataTable.version.split('.');var aThat = version.split('.');var iThis, iThat;for (var i = 0, iLen = aThat.length; i < iLen; i++) {
      iThis = parseInt(aThis[i], 10) || 0;iThat = parseInt(aThat[i], 10) || 0;if (iThis === iThat) {
        continue;
      }return iThis > iThat;
    }return true;
  };DataTable.isDataTable = DataTable.fnIsDataTable = function (table) {
    var t = $(table).get(0);var is = false;if (table instanceof DataTable.Api) {
      return true;
    }$.each(DataTable.settings, function (i, o) {
      var head = o.nScrollHead ? $('table', o.nScrollHead)[0] : null;var foot = o.nScrollFoot ? $('table', o.nScrollFoot)[0] : null;if (o.nTable === t || head === t || foot === t) {
        is = true;
      }
    });return is;
  };DataTable.tables = DataTable.fnTables = function (visible) {
    var api = false;if ($.isPlainObject(visible)) {
      api = visible.api;visible = visible.visible;
    }var a = $.map(DataTable.settings, function (o) {
      if (!visible || visible && $(o.nTable).is(':visible')) {
        return o.nTable;
      }
    });return api ? new _Api2(a) : a;
  };DataTable.camelToHungarian = _fnCamelToHungarian;_api_register('$()', function (selector, opts) {
    var rows = this.rows(opts).nodes(),
        jqRows = $(rows);return $([].concat(jqRows.filter(selector).toArray(), jqRows.find(selector).toArray()));
  });$.each(['on', 'one', 'off'], function (i, key) {
    _api_register(key + '()', function () {
      var args = Array.prototype.slice.call(arguments);args[0] = $.map(args[0].split(/\s/), function (e) {
        return !e.match(/\.dt\b/) ? e + '.dt' : e;
      }).join(' ');var inst = $(this.tables().nodes());inst[key].apply(inst, args);return this;
    });
  });_api_register('clear()', function () {
    return this.iterator('table', function (settings) {
      _fnClearTable(settings);
    });
  });_api_register('settings()', function () {
    return new _Api2(this.context, this.context);
  });_api_register('init()', function () {
    var ctx = this.context;return ctx.length ? ctx[0].oInit : null;
  });_api_register('data()', function () {
    return this.iterator('table', function (settings) {
      return _pluck(settings.aoData, '_aData');
    }).flatten();
  });_api_register('destroy()', function (remove) {
    remove = remove || false;return this.iterator('table', function (settings) {
      var orig = settings.nTableWrapper.parentNode;var classes = settings.oClasses;var table = settings.nTable;var tbody = settings.nTBody;var thead = settings.nTHead;var tfoot = settings.nTFoot;var jqTable = $(table);var jqTbody = $(tbody);var jqWrapper = $(settings.nTableWrapper);var rows = $.map(settings.aoData, function (r) {
        return r.nTr;
      });var i, ien;settings.bDestroying = true;_fnCallbackFire(settings, "aoDestroyCallback", "destroy", [settings]);if (!remove) {
        new _Api2(settings).columns().visible(true);
      }jqWrapper.off('.DT').find(':not(tbody *)').off('.DT');$(window).off('.DT-' + settings.sInstance);if (table != thead.parentNode) {
        jqTable.children('thead').detach();jqTable.append(thead);
      }if (tfoot && table != tfoot.parentNode) {
        jqTable.children('tfoot').detach();jqTable.append(tfoot);
      }settings.aaSorting = [];settings.aaSortingFixed = [];_fnSortingClasses(settings);$(rows).removeClass(settings.asStripeClasses.join(' '));$('th, td', thead).removeClass(classes.sSortable + ' ' + classes.sSortableAsc + ' ' + classes.sSortableDesc + ' ' + classes.sSortableNone);if (settings.bJUI) {
        $('th span.' + classes.sSortIcon + ', td span.' + classes.sSortIcon, thead).detach();$('th, td', thead).each(function () {
          var wrapper = $('div.' + classes.sSortJUIWrapper, this);$(this).append(wrapper.contents());wrapper.detach();
        });
      }jqTbody.children().detach();jqTbody.append(rows);var removedMethod = remove ? 'remove' : 'detach';jqTable[removedMethod]();jqWrapper[removedMethod]();if (!remove && orig) {
        orig.insertBefore(table, settings.nTableReinsertBefore);jqTable.css('width', settings.sDestroyWidth).removeClass(classes.sTable);ien = settings.asDestroyStripes.length;if (ien) {
          jqTbody.children().each(function (i) {
            $(this).addClass(settings.asDestroyStripes[i % ien]);
          });
        }
      }var idx = $.inArray(settings, DataTable.settings);if (idx !== -1) {
        DataTable.settings.splice(idx, 1);
      }
    });
  });$.each(['column', 'row', 'cell'], function (i, type) {
    _api_register(type + 's().every()', function (fn) {
      var opts = this.selector.opts;var api = this;return this.iterator(type, function (settings, arg1, arg2, arg3, arg4) {
        fn.call(api[type](arg1, type === 'cell' ? arg2 : opts, type === 'cell' ? opts : undefined), arg1, arg2, arg3, arg4);
      });
    });
  });_api_register('i18n()', function (token, def, plural) {
    var ctx = this.context[0];var resolved = _fnGetObjectDataFn(token)(ctx.oLanguage);if (resolved === undefined) {
      resolved = def;
    }if (plural !== undefined && $.isPlainObject(resolved)) {
      resolved = resolved[plural] !== undefined ? resolved[plural] : resolved._;
    }return resolved.replace('%d', plural);
  });DataTable.version = "1.10.15";DataTable.settings = [];DataTable.models = {};DataTable.models.oSearch = { "bCaseInsensitive": true, "sSearch": "", "bRegex": false, "bSmart": true };DataTable.models.oRow = { "nTr": null, "anCells": null, "_aData": [], "_aSortData": null, "_aFilterData": null, "_sFilterRow": null, "_sRowStripe": "", "src": null, "idx": -1 };DataTable.models.oColumn = { "idx": null, "aDataSort": null, "asSorting": null, "bSearchable": null, "bSortable": null, "bVisible": null, "_sManualType": null, "_bAttrSrc": false, "fnCreatedCell": null, "fnGetData": null, "fnSetData": null, "mData": null, "mRender": null, "nTh": null, "nTf": null, "sClass": null, "sContentPadding": null, "sDefaultContent": null, "sName": null, "sSortDataType": 'std', "sSortingClass": null, "sSortingClassJUI": null, "sTitle": null, "sType": null, "sWidth": null, "sWidthOrig": null };DataTable.defaults = { "aaData": null, "aaSorting": [[0, 'asc']], "aaSortingFixed": [], "ajax": null, "aLengthMenu": [10, 25, 50, 100], "aoColumns": null, "aoColumnDefs": null, "aoSearchCols": [], "asStripeClasses": null, "bAutoWidth": true, "bDeferRender": false, "bDestroy": false, "bFilter": true, "bInfo": true, "bJQueryUI": false, "bLengthChange": true, "bPaginate": true, "bProcessing": false, "bRetrieve": false, "bScrollCollapse": false, "bServerSide": false, "bSort": true, "bSortMulti": true, "bSortCellsTop": false, "bSortClasses": true, "bStateSave": false, "fnCreatedRow": null, "fnDrawCallback": null, "fnFooterCallback": null, "fnFormatNumber": function fnFormatNumber(toFormat) {
      return toFormat.toString().replace(/\B(?=(\d{3})+(?!\d))/g, this.oLanguage.sThousands);
    }, "fnHeaderCallback": null, "fnInfoCallback": null, "fnInitComplete": null, "fnPreDrawCallback": null, "fnRowCallback": null, "fnServerData": null, "fnServerParams": null, "fnStateLoadCallback": function fnStateLoadCallback(settings) {
      try {
        return JSON.parse((settings.iStateDuration === -1 ? sessionStorage : localStorage).getItem('DataTables_' + settings.sInstance + '_' + location.pathname));
      } catch (e) {}
    }, "fnStateLoadParams": null, "fnStateLoaded": null, "fnStateSaveCallback": function fnStateSaveCallback(settings, data) {
      try {
        (settings.iStateDuration === -1 ? sessionStorage : localStorage).setItem('DataTables_' + settings.sInstance + '_' + location.pathname, JSON.stringify(data));
      } catch (e) {}
    }, "fnStateSaveParams": null, "iStateDuration": 7200, "iDeferLoading": null, "iDisplayLength": 10, "iDisplayStart": 0, "iTabIndex": 0, "oClasses": {}, "oLanguage": { "oAria": { "sSortAscending": ": activate to sort column ascending", "sSortDescending": ": activate to sort column descending" }, "oPaginate": { "sFirst": "First", "sLast": "Last", "sNext": "Next", "sPrevious": "Previous" }, "sEmptyTable": "抱歉，暂无数据", "sInfo": "Showing _START_ to _END_ of _TOTAL_ entries", "sInfoEmpty": "Showing 0 to 0 of 0 entries", "sInfoFiltered": "(filtered from _MAX_ total entries)", "sInfoPostFix": "", "sDecimal": "", "sThousands": ",", "sLengthMenu": "Show _MENU_ entries", "sLoadingRecords": "Loading...", "sProcessing": "Processing...", "sSearch": "Search:", "sSearchPlaceholder": "", "sUrl": "", "sZeroRecords": "No matching records found" }, "oSearch": $.extend({}, DataTable.models.oSearch), "sAjaxDataProp": "data", "sAjaxSource": null, "sDom": "lfrtip", "searchDelay": null, "sPaginationType": "simple_numbers", "sScrollX": "", "sScrollXInner": "", "sScrollY": "", "sServerMethod": "GET", "renderer": null, "rowId": "DT_RowId" };_fnHungarianMap(DataTable.defaults);DataTable.defaults.column = { "aDataSort": null, "iDataSort": -1, "asSorting": ['asc', 'desc'], "bSearchable": true, "bSortable": true, "bVisible": true, "fnCreatedCell": null, "mData": null, "mRender": null, "sCellType": "td", "sClass": "", "sContentPadding": "", "sDefaultContent": null, "sName": "", "sSortDataType": "std", "sTitle": null, "sType": null, "sWidth": null };_fnHungarianMap(DataTable.defaults.column);DataTable.models.oSettings = { "oFeatures": { "bAutoWidth": null, "bDeferRender": null, "bFilter": null, "bInfo": null, "bLengthChange": null, "bPaginate": null, "bProcessing": null, "bServerSide": null, "bSort": null, "bSortMulti": null, "bSortClasses": null, "bStateSave": null }, "oScroll": { "bCollapse": null, "iBarWidth": 0, "sX": null, "sXInner": null, "sY": null }, "oLanguage": { "fnInfoCallback": null }, "oBrowser": { "bScrollOversize": false, "bScrollbarLeft": false, "bBounding": false, "barWidth": 0 }, "ajax": null, "aanFeatures": [], "aoData": [], "aiDisplay": [], "aiDisplayMaster": [], "aIds": {}, "aoColumns": [], "aoHeader": [], "aoFooter": [], "oPreviousSearch": {}, "aoPreSearchCols": [], "aaSorting": null, "aaSortingFixed": [], "asStripeClasses": null, "asDestroyStripes": [], "sDestroyWidth": 0, "aoRowCallback": [], "aoHeaderCallback": [], "aoFooterCallback": [], "aoDrawCallback": [], "aoRowCreatedCallback": [], "aoPreDrawCallback": [], "aoInitComplete": [], "aoStateSaveParams": [], "aoStateLoadParams": [], "aoStateLoaded": [], "sTableId": "", "nTable": null, "nTHead": null, "nTFoot": null, "nTBody": null, "nTableWrapper": null, "bDeferLoading": false, "bInitialised": false, "aoOpenRows": [], "sDom": null, "searchDelay": null, "sPaginationType": "two_button", "iStateDuration": 0, "aoStateSave": [], "aoStateLoad": [], "oSavedState": null, "oLoadedState": null, "sAjaxSource": null, "sAjaxDataProp": null, "bAjaxDataGet": true, "jqXHR": null, "json": undefined, "oAjaxData": undefined, "fnServerData": null, "aoServerParams": [], "sServerMethod": null, "fnFormatNumber": null, "aLengthMenu": null, "iDraw": 0, "bDrawing": false, "iDrawError": -1, "_iDisplayLength": 10, "_iDisplayStart": 0, "_iRecordsTotal": 0, "_iRecordsDisplay": 0, "bJUI": null, "oClasses": {}, "bFiltered": false, "bSorted": false, "bSortCellsTop": null, "oInit": null, "aoDestroyCallback": [], "fnRecordsTotal": function fnRecordsTotal() {
      return _fnDataSource(this) == 'ssp' ? this._iRecordsTotal * 1 : this.aiDisplayMaster.length;
    }, "fnRecordsDisplay": function fnRecordsDisplay() {
      return _fnDataSource(this) == 'ssp' ? this._iRecordsDisplay * 1 : this.aiDisplay.length;
    }, "fnDisplayEnd": function fnDisplayEnd() {
      var len = this._iDisplayLength,
          start = this._iDisplayStart,
          calc = start + len,
          records = this.aiDisplay.length,
          features = this.oFeatures,
          paginate = features.bPaginate;if (features.bServerSide) {
        return paginate === false || len === -1 ? start + records : Math.min(start + len, this._iRecordsDisplay);
      } else {
        return !paginate || calc > records || len === -1 ? records : calc;
      }
    }, "oInstance": null, "sInstance": null, "iTabIndex": 0, "nScrollHead": null, "nScrollFoot": null, "aLastSort": [], "oPlugins": {}, "rowIdFn": null, "rowId": null };DataTable.ext = _ext = { buttons: {}, classes: {}, builder: "-source-", errMode: "alert", feature: [], search: [], selector: { cell: [], column: [], row: [] }, internal: {}, legacy: { ajax: null }, pager: {}, renderer: { pageButton: {}, header: {} }, order: {}, type: { detect: [], search: {}, order: {} }, _unique: 0, fnVersionCheck: DataTable.fnVersionCheck, iApiIndex: 0, oJUIClasses: {}, sVersion: DataTable.version };$.extend(_ext, { afnFiltering: _ext.search, aTypes: _ext.type.detect, ofnSearch: _ext.type.search, oSort: _ext.type.order, afnSortData: _ext.order, aoFeatures: _ext.feature, oApi: _ext.internal, oStdClasses: _ext.classes, oPagination: _ext.pager });$.extend(DataTable.ext.classes, { "sTable": "dataTable", "sNoFooter": "no-footer", "sPageButton": "paginate_button", "sPageButtonActive": "current", "sPageButtonDisabled": "disabled", "sStripeOdd": "odd", "sStripeEven": "even", "sRowEmpty": "dataTables_empty", "sWrapper": "dataTables_wrapper", "sFilter": "dataTables_filter", "sInfo": "dataTables_info", "sPaging": "dataTables_paginate paging_", "sLength": "dataTables_length", "sProcessing": "dataTables_processing", "sSortAsc": "sorting_asc", "sSortDesc": "sorting_desc", "sSortable": "sorting", "sSortableAsc": "sorting_asc_disabled", "sSortableDesc": "sorting_desc_disabled", "sSortableNone": "sorting_disabled", "sSortColumn": "sorting_", "sFilterInput": "", "sLengthSelect": "", "sScrollWrapper": "dataTables_scroll", "sScrollHead": "dataTables_scrollHead", "sScrollHeadInner": "dataTables_scrollHeadInner", "sScrollBody": "dataTables_scrollBody", "sScrollFoot": "dataTables_scrollFoot", "sScrollFootInner": "dataTables_scrollFootInner", "sHeaderTH": "", "sFooterTH": "", "sSortJUIAsc": "", "sSortJUIDesc": "", "sSortJUI": "", "sSortJUIAscAllowed": "", "sSortJUIDescAllowed": "", "sSortJUIWrapper": "", "sSortIcon": "", "sJUIHeader": "", "sJUIFooter": "" });(function () {
    var _empty = '';_empty = '';var _stateDefault = _empty + 'ui-state-default';var _sortIcon = _empty + 'css_right ui-icon ui-icon-';var _headerFooter = _empty + 'fg-toolbar ui-toolbar ui-widget-header ui-helper-clearfix';$.extend(DataTable.ext.oJUIClasses, DataTable.ext.classes, { "sPageButton": "fg-button ui-button " + _stateDefault, "sPageButtonActive": "ui-state-disabled", "sPageButtonDisabled": "ui-state-disabled", "sPaging": "dataTables_paginate fg-buttonset ui-buttonset fg-buttonset-multi " + "ui-buttonset-multi paging_", "sSortAsc": _stateDefault + " sorting_asc", "sSortDesc": _stateDefault + " sorting_desc", "sSortable": _stateDefault + " sorting", "sSortableAsc": _stateDefault + " sorting_asc_disabled", "sSortableDesc": _stateDefault + " sorting_desc_disabled", "sSortableNone": _stateDefault + " sorting_disabled", "sSortJUIAsc": _sortIcon + "triangle-1-n", "sSortJUIDesc": _sortIcon + "triangle-1-s", "sSortJUI": _sortIcon + "carat-2-n-s", "sSortJUIAscAllowed": _sortIcon + "carat-1-n", "sSortJUIDescAllowed": _sortIcon + "carat-1-s", "sSortJUIWrapper": "DataTables_sort_wrapper", "sSortIcon": "DataTables_sort_icon", "sScrollHead": "dataTables_scrollHead " + _stateDefault, "sScrollFoot": "dataTables_scrollFoot " + _stateDefault, "sHeaderTH": _stateDefault, "sFooterTH": _stateDefault, "sJUIHeader": _headerFooter + " ui-corner-tl ui-corner-tr", "sJUIFooter": _headerFooter + " ui-corner-bl ui-corner-br" });
  })();var extPagination = DataTable.ext.pager;function _numbers(page, pages) {
    var numbers = [],
        buttons = extPagination.numbers_length,
        half = Math.floor(buttons / 2),
        i = 1;if (pages <= buttons) {
      numbers = _range(0, pages);
    } else if (page <= half) {
      numbers = _range(0, buttons - 2);numbers.push('ellipsis');numbers.push(pages - 1);
    } else if (page >= pages - 1 - half) {
      numbers = _range(pages - (buttons - 2), pages);numbers.splice(0, 0, 'ellipsis');numbers.splice(0, 0, 0);
    } else {
      numbers = _range(page - half + 2, page + half - 1);numbers.push('ellipsis');numbers.push(pages - 1);numbers.splice(0, 0, 'ellipsis');numbers.splice(0, 0, 0);
    }numbers.DT_el = 'span';return numbers;
  }$.extend(extPagination, { simple: function simple(page, pages) {
      return ['previous', 'next'];
    }, full: function full(page, pages) {
      return ['first', 'previous', 'next', 'last'];
    }, numbers: function numbers(page, pages) {
      return [_numbers(page, pages)];
    }, simple_numbers: function simple_numbers(page, pages) {
      return ['previous', _numbers(page, pages), 'next'];
    }, full_numbers: function full_numbers(page, pages) {
      return ['first', 'previous', _numbers(page, pages), 'next', 'last'];
    }, first_last_numbers: function first_last_numbers(page, pages) {
      return ['first', _numbers(page, pages), 'last'];
    }, _numbers: _numbers, numbers_length: 7 });$.extend(true, DataTable.ext.renderer, { pageButton: { _: function _(settings, host, idx, buttons, page, pages) {
        var classes = settings.oClasses;var lang = settings.oLanguage.oPaginate;var aria = settings.oLanguage.oAria.paginate || {};var btnDisplay,
            btnClass,
            counter = 0;var attach = function attach(container, buttons) {
          var i, ien, node, button;var clickHandler = function clickHandler(e) {
            _fnPageChange(settings, e.data.action, true);
          };for (i = 0, ien = buttons.length; i < ien; i++) {
            button = buttons[i];if ($.isArray(button)) {
              var inner = $('<' + (button.DT_el || 'div') + '/>').appendTo(container);attach(inner, button);
            } else {
              btnDisplay = null;btnClass = '';switch (button) {case 'ellipsis':
                  container.append('<span class="ellipsis">&#x2026;</span>');break;case 'first':
                  btnDisplay = lang.sFirst;btnClass = button + (page > 0 ? '' : ' ' + classes.sPageButtonDisabled);break;case 'previous':
                  btnDisplay = lang.sPrevious;btnClass = button + (page > 0 ? '' : ' ' + classes.sPageButtonDisabled);break;case 'next':
                  btnDisplay = lang.sNext;btnClass = button + (page < pages - 1 ? '' : ' ' + classes.sPageButtonDisabled);break;case 'last':
                  btnDisplay = lang.sLast;btnClass = button + (page < pages - 1 ? '' : ' ' + classes.sPageButtonDisabled);break;default:
                  btnDisplay = button + 1;btnClass = page === button ? classes.sPageButtonActive : '';break;}if (btnDisplay !== null) {
                node = $('<a>', { 'class': classes.sPageButton + ' ' + btnClass, 'aria-controls': settings.sTableId, 'aria-label': aria[button], 'data-dt-idx': counter, 'tabindex': settings.iTabIndex, 'id': idx === 0 && typeof button === 'string' ? settings.sTableId + '_' + button : null }).html(btnDisplay).appendTo(container);_fnBindAction(node, { action: button }, clickHandler);counter++;
              }
            }
          }
        };var activeEl;try {
          activeEl = $(host).find(document.activeElement).data('dt-idx');
        } catch (e) {}attach($(host).empty(), buttons);if (activeEl !== undefined) {
          $(host).find('[data-dt-idx=' + activeEl + ']').focus();
        }
      } } });$.extend(DataTable.ext.type.detect, [function (d, settings) {
    var decimal = settings.oLanguage.sDecimal;return _isNumber(d, decimal) ? 'num' + decimal : null;
  }, function (d, settings) {
    if (d && !(d instanceof Date) && !_re_date.test(d)) {
      return null;
    }var parsed = Date.parse(d);return parsed !== null && !isNaN(parsed) || _empty(d) ? 'date' : null;
  }, function (d, settings) {
    var decimal = settings.oLanguage.sDecimal;return _isNumber(d, decimal, true) ? 'num-fmt' + decimal : null;
  }, function (d, settings) {
    var decimal = settings.oLanguage.sDecimal;return _htmlNumeric(d, decimal) ? 'html-num' + decimal : null;
  }, function (d, settings) {
    var decimal = settings.oLanguage.sDecimal;return _htmlNumeric(d, decimal, true) ? 'html-num-fmt' + decimal : null;
  }, function (d, settings) {
    return _empty(d) || typeof d === 'string' && d.indexOf('<') !== -1 ? 'html' : null;
  }]);$.extend(DataTable.ext.type.search, { html: function html(data) {
      return _empty(data) ? data : typeof data === 'string' ? data.replace(_re_new_lines, " ").replace(_re_html, "") : '';
    }, string: function string(data) {
      return _empty(data) ? data : typeof data === 'string' ? data.replace(_re_new_lines, " ") : data;
    } });var __numericReplace = function __numericReplace(d, decimalPlace, re1, re2) {
    if (d !== 0 && (!d || d === '-')) {
      return -Infinity;
    }if (decimalPlace) {
      d = _numToDecimal(d, decimalPlace);
    }if (d.replace) {
      if (re1) {
        d = d.replace(re1, '');
      }if (re2) {
        d = d.replace(re2, '');
      }
    }return d * 1;
  };function _addNumericSort(decimalPlace) {
    $.each({ "num": function num(d) {
        return __numericReplace(d, decimalPlace);
      }, "num-fmt": function numFmt(d) {
        return __numericReplace(d, decimalPlace, _re_formatted_numeric);
      }, "html-num": function htmlNum(d) {
        return __numericReplace(d, decimalPlace, _re_html);
      }, "html-num-fmt": function htmlNumFmt(d) {
        return __numericReplace(d, decimalPlace, _re_html, _re_formatted_numeric);
      } }, function (key, fn) {
      _ext.type.order[key + decimalPlace + '-pre'] = fn;if (key.match(/^html\-/)) {
        _ext.type.search[key + decimalPlace] = _ext.type.search.html;
      }
    });
  }$.extend(_ext.type.order, { "date-pre": function datePre(d) {
      return Date.parse(d) || -Infinity;
    }, "html-pre": function htmlPre(a) {
      return _empty(a) ? '' : a.replace ? a.replace(/<.*?>/g, "").toLowerCase() : a + '';
    }, "string-pre": function stringPre(a) {
      return _empty(a) ? '' : typeof a === 'string' ? a.toLowerCase() : !a.toString ? '' : a.toString();
    }, "string-asc": function stringAsc(x, y) {
      return x < y ? -1 : x > y ? 1 : 0;
    }, "string-desc": function stringDesc(x, y) {
      return x < y ? 1 : x > y ? -1 : 0;
    } });_addNumericSort('');$.extend(true, DataTable.ext.renderer, { header: { _: function _(settings, cell, column, classes) {
        $(settings.nTable).on('order.dt.DT', function (e, ctx, sorting, columns) {
          if (settings !== ctx) {
            return;
          }var colIdx = column.idx;cell.removeClass(column.sSortingClass + ' ' + classes.sSortAsc + ' ' + classes.sSortDesc).addClass(!column.orderable ? column.sSortingClass : columns[colIdx] == 'asc' ? classes.sSortAsc : columns[colIdx] == 'desc' ? classes.sSortDesc : column.sSortingClass);
        });
      }, jqueryui: function jqueryui(settings, cell, column, classes) {
        $('<div/>').addClass(classes.sSortJUIWrapper).append(cell.contents()).append($('<span/>').addClass(classes.sSortIcon + ' ' + column.sSortingClassJUI)).appendTo(cell);$(settings.nTable).on('order.dt.DT', function (e, ctx, sorting, columns) {
          if (settings !== ctx) {
            return;
          }var colIdx = column.idx;cell.removeClass(classes.sSortAsc + " " + classes.sSortDesc).addClass(columns[colIdx] == 'asc' ? classes.sSortAsc : columns[colIdx] == 'desc' ? classes.sSortDesc : column.sSortingClass);cell.find('span.' + classes.sSortIcon).removeClass(classes.sSortJUIAsc + " " + classes.sSortJUIDesc + " " + classes.sSortJUI + " " + classes.sSortJUIAscAllowed + " " + classes.sSortJUIDescAllowed).addClass(columns[colIdx] == 'asc' ? classes.sSortJUIAsc : columns[colIdx] == 'desc' ? classes.sSortJUIDesc : column.sSortingClassJUI);
        });
      } } });var __htmlEscapeEntities = function __htmlEscapeEntities(d) {
    return typeof d === 'string' ? d.replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;') : d;
  };DataTable.render = { number: function number(thousands, decimal, precision, prefix, postfix) {
      return { display: function display(d) {
          if (typeof d !== 'number' && typeof d !== 'string') {
            return d;
          }var negative = d < 0 ? '-' : '';var flo = parseFloat(d);if (isNaN(flo)) {
            return __htmlEscapeEntities(d);
          }flo = flo.toFixed(precision);d = Math.abs(flo);var intPart = parseInt(d, 10);var floatPart = precision ? decimal + (d - intPart).toFixed(precision).substring(2) : '';return negative + (prefix || '') + intPart.toString().replace(/\B(?=(\d{3})+(?!\d))/g, thousands) + floatPart + (postfix || '');
        } };
    }, text: function text() {
      return { display: __htmlEscapeEntities };
    } };function _fnExternApiFunc(fn) {
    return function () {
      var args = [_fnSettingsFromNode(this[DataTable.ext.iApiIndex])].concat(Array.prototype.slice.call(arguments));return DataTable.ext.internal[fn].apply(this, args);
    };
  }$.extend(DataTable.ext.internal, { _fnExternApiFunc: _fnExternApiFunc, _fnBuildAjax: _fnBuildAjax, _fnAjaxUpdate: _fnAjaxUpdate, _fnAjaxParameters: _fnAjaxParameters, _fnAjaxUpdateDraw: _fnAjaxUpdateDraw, _fnAjaxDataSrc: _fnAjaxDataSrc, _fnAddColumn: _fnAddColumn, _fnColumnOptions: _fnColumnOptions, _fnAdjustColumnSizing: _fnAdjustColumnSizing, _fnVisibleToColumnIndex: _fnVisibleToColumnIndex, _fnColumnIndexToVisible: _fnColumnIndexToVisible, _fnVisbleColumns: _fnVisbleColumns, _fnGetColumns: _fnGetColumns, _fnColumnTypes: _fnColumnTypes, _fnApplyColumnDefs: _fnApplyColumnDefs, _fnHungarianMap: _fnHungarianMap, _fnCamelToHungarian: _fnCamelToHungarian, _fnLanguageCompat: _fnLanguageCompat, _fnBrowserDetect: _fnBrowserDetect, _fnAddData: _fnAddData, _fnAddTr: _fnAddTr, _fnNodeToDataIndex: _fnNodeToDataIndex, _fnNodeToColumnIndex: _fnNodeToColumnIndex, _fnGetCellData: _fnGetCellData, _fnSetCellData: _fnSetCellData, _fnSplitObjNotation: _fnSplitObjNotation, _fnGetObjectDataFn: _fnGetObjectDataFn, _fnSetObjectDataFn: _fnSetObjectDataFn, _fnGetDataMaster: _fnGetDataMaster, _fnClearTable: _fnClearTable, _fnDeleteIndex: _fnDeleteIndex, _fnInvalidate: _fnInvalidate, _fnGetRowElements: _fnGetRowElements, _fnCreateTr: _fnCreateTr, _fnBuildHead: _fnBuildHead, _fnDrawHead: _fnDrawHead, _fnDraw: _fnDraw, _fnReDraw: _fnReDraw, _fnAddOptionsHtml: _fnAddOptionsHtml, _fnDetectHeader: _fnDetectHeader, _fnGetUniqueThs: _fnGetUniqueThs, _fnFeatureHtmlFilter: _fnFeatureHtmlFilter, _fnFilterComplete: _fnFilterComplete, _fnFilterCustom: _fnFilterCustom, _fnFilterColumn: _fnFilterColumn, _fnFilter: _fnFilter, _fnFilterCreateSearch: _fnFilterCreateSearch, _fnEscapeRegex: _fnEscapeRegex, _fnFilterData: _fnFilterData, _fnFeatureHtmlInfo: _fnFeatureHtmlInfo, _fnUpdateInfo: _fnUpdateInfo, _fnInfoMacros: _fnInfoMacros, _fnInitialise: _fnInitialise, _fnInitComplete: _fnInitComplete, _fnLengthChange: _fnLengthChange, _fnFeatureHtmlLength: _fnFeatureHtmlLength, _fnFeatureHtmlPaginate: _fnFeatureHtmlPaginate, _fnPageChange: _fnPageChange, _fnFeatureHtmlProcessing: _fnFeatureHtmlProcessing, _fnProcessingDisplay: _fnProcessingDisplay, _fnFeatureHtmlTable: _fnFeatureHtmlTable, _fnScrollDraw: _fnScrollDraw, _fnApplyToChildren: _fnApplyToChildren, _fnCalculateColumnWidths: _fnCalculateColumnWidths, _fnThrottle: _fnThrottle, _fnConvertToWidth: _fnConvertToWidth, _fnGetWidestNode: _fnGetWidestNode, _fnGetMaxLenString: _fnGetMaxLenString, _fnStringToCss: _fnStringToCss, _fnSortFlatten: _fnSortFlatten, _fnSort: _fnSort, _fnSortAria: _fnSortAria, _fnSortListener: _fnSortListener, _fnSortAttachListener: _fnSortAttachListener, _fnSortingClasses: _fnSortingClasses, _fnSortData: _fnSortData, _fnSaveState: _fnSaveState, _fnLoadState: _fnLoadState, _fnSettingsFromNode: _fnSettingsFromNode, _fnLog: _fnLog, _fnMap: _fnMap, _fnBindAction: _fnBindAction, _fnCallbackReg: _fnCallbackReg, _fnCallbackFire: _fnCallbackFire, _fnLengthOverflow: _fnLengthOverflow, _fnRenderer: _fnRenderer, _fnDataSource: _fnDataSource, _fnRowAttributes: _fnRowAttributes, _fnCalculateEnd: function _fnCalculateEnd() {} });$.fn.dataTable = DataTable;DataTable.$ = $;$.fn.dataTableSettings = DataTable.settings;$.fn.dataTableExt = DataTable.ext;$.fn.DataTable = function (opts) {
    return $(this).dataTable(opts).api();
  };$.each(DataTable, function (prop, val) {
    $.fn.DataTable[prop] = val;
  });return $.fn.dataTable;
});

/***/ }),

/***/ 199:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(200);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(78)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../../node_modules/css-loader/index.js!./jquery.dataTables.min.css", function() {
			var newContent = require("!!../../../../../node_modules/css-loader/index.js!./jquery.dataTables.min.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 200:
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(7);
exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "table.dataTable{width:100%;margin:0 auto;clear:both;border-collapse:separate;border-spacing:0}table.dataTable thead th,table.dataTable tfoot th{font-weight:bold}table.dataTable thead th,table.dataTable thead td{padding:10px 18px;border-bottom:1px solid #111}table.dataTable thead th:active,table.dataTable thead td:active{outline:none}table.dataTable tfoot th,table.dataTable tfoot td{padding:10px 18px 6px 18px;border-top:1px solid #111}table.dataTable thead .sorting,table.dataTable thead .sorting_asc,table.dataTable thead .sorting_desc,table.dataTable thead .sorting_asc_disabled,table.dataTable thead .sorting_desc_disabled{cursor:pointer;*cursor:hand}table.dataTable thead .sorting,table.dataTable thead .sorting_asc,table.dataTable thead .sorting_desc,table.dataTable thead .sorting_asc_disabled,table.dataTable thead .sorting_desc_disabled{background-repeat:no-repeat;background-position:center right}table.dataTable thead .sorting{background-image:url(" + escape(__webpack_require__(201)) + ")}table.dataTable thead .sorting_asc{background-image:url(" + escape(__webpack_require__(202)) + ")}table.dataTable thead .sorting_desc{background-image:url(" + escape(__webpack_require__(203)) + ")}table.dataTable thead .sorting_asc_disabled{background-image:url(" + escape(__webpack_require__(204)) + ")}table.dataTable thead .sorting_desc_disabled{background-image:url(" + escape(__webpack_require__(205)) + ")}table.dataTable tbody tr{background-color:#ffffff}table.dataTable tbody tr.selected{background-color:#B0BED9}table.dataTable tbody th,table.dataTable tbody td{padding:8px 10px}table.dataTable.row-border tbody th,table.dataTable.row-border tbody td,table.dataTable.display tbody th,table.dataTable.display tbody td{border-top:1px solid #ddd}table.dataTable.row-border tbody tr:first-child th,table.dataTable.row-border tbody tr:first-child td,table.dataTable.display tbody tr:first-child th,table.dataTable.display tbody tr:first-child td{border-top:none}table.dataTable.cell-border tbody th,table.dataTable.cell-border tbody td{border-top:1px solid #ddd;border-right:1px solid #ddd}table.dataTable.cell-border tbody tr th:first-child,table.dataTable.cell-border tbody tr td:first-child{border-left:1px solid #ddd}table.dataTable.cell-border tbody tr:first-child th,table.dataTable.cell-border tbody tr:first-child td{border-top:none}table.dataTable.stripe tbody tr.odd,table.dataTable.display tbody tr.odd{background-color:#f9f9f9}table.dataTable.stripe tbody tr.odd.selected,table.dataTable.display tbody tr.odd.selected{background-color:#acbad4}table.dataTable.hover tbody tr:hover,table.dataTable.display tbody tr:hover{background-color:#f6f6f6}table.dataTable.hover tbody tr:hover.selected,table.dataTable.display tbody tr:hover.selected{background-color:#aab7d1}table.dataTable.order-column tbody tr>.sorting_1,table.dataTable.order-column tbody tr>.sorting_2,table.dataTable.order-column tbody tr>.sorting_3,table.dataTable.display tbody tr>.sorting_1,table.dataTable.display tbody tr>.sorting_2,table.dataTable.display tbody tr>.sorting_3{background-color:#fafafa}table.dataTable.order-column tbody tr.selected>.sorting_1,table.dataTable.order-column tbody tr.selected>.sorting_2,table.dataTable.order-column tbody tr.selected>.sorting_3,table.dataTable.display tbody tr.selected>.sorting_1,table.dataTable.display tbody tr.selected>.sorting_2,table.dataTable.display tbody tr.selected>.sorting_3{background-color:#acbad5}table.dataTable.display tbody tr.odd>.sorting_1,table.dataTable.order-column.stripe tbody tr.odd>.sorting_1{background-color:#f1f1f1}table.dataTable.display tbody tr.odd>.sorting_2,table.dataTable.order-column.stripe tbody tr.odd>.sorting_2{background-color:#f3f3f3}table.dataTable.display tbody tr.odd>.sorting_3,table.dataTable.order-column.stripe tbody tr.odd>.sorting_3{background-color:whitesmoke}table.dataTable.display tbody tr.odd.selected>.sorting_1,table.dataTable.order-column.stripe tbody tr.odd.selected>.sorting_1{background-color:#a6b4cd}table.dataTable.display tbody tr.odd.selected>.sorting_2,table.dataTable.order-column.stripe tbody tr.odd.selected>.sorting_2{background-color:#a8b5cf}table.dataTable.display tbody tr.odd.selected>.sorting_3,table.dataTable.order-column.stripe tbody tr.odd.selected>.sorting_3{background-color:#a9b7d1}table.dataTable.display tbody tr.even>.sorting_1,table.dataTable.order-column.stripe tbody tr.even>.sorting_1{background-color:#fafafa}table.dataTable.display tbody tr.even>.sorting_2,table.dataTable.order-column.stripe tbody tr.even>.sorting_2{background-color:#fcfcfc}table.dataTable.display tbody tr.even>.sorting_3,table.dataTable.order-column.stripe tbody tr.even>.sorting_3{background-color:#fefefe}table.dataTable.display tbody tr.even.selected>.sorting_1,table.dataTable.order-column.stripe tbody tr.even.selected>.sorting_1{background-color:#acbad5}table.dataTable.display tbody tr.even.selected>.sorting_2,table.dataTable.order-column.stripe tbody tr.even.selected>.sorting_2{background-color:#aebcd6}table.dataTable.display tbody tr.even.selected>.sorting_3,table.dataTable.order-column.stripe tbody tr.even.selected>.sorting_3{background-color:#afbdd8}table.dataTable.display tbody tr:hover>.sorting_1,table.dataTable.order-column.hover tbody tr:hover>.sorting_1{background-color:#eaeaea}table.dataTable.display tbody tr:hover>.sorting_2,table.dataTable.order-column.hover tbody tr:hover>.sorting_2{background-color:#ececec}table.dataTable.display tbody tr:hover>.sorting_3,table.dataTable.order-column.hover tbody tr:hover>.sorting_3{background-color:#efefef}table.dataTable.display tbody tr:hover.selected>.sorting_1,table.dataTable.order-column.hover tbody tr:hover.selected>.sorting_1{background-color:#a2aec7}table.dataTable.display tbody tr:hover.selected>.sorting_2,table.dataTable.order-column.hover tbody tr:hover.selected>.sorting_2{background-color:#a3b0c9}table.dataTable.display tbody tr:hover.selected>.sorting_3,table.dataTable.order-column.hover tbody tr:hover.selected>.sorting_3{background-color:#a5b2cb}table.dataTable.no-footer{border-bottom:1px solid #111}table.dataTable.nowrap th,table.dataTable.nowrap td{white-space:nowrap}table.dataTable.compact thead th,table.dataTable.compact thead td{padding:4px 17px 4px 4px}table.dataTable.compact tfoot th,table.dataTable.compact tfoot td{padding:4px}table.dataTable.compact tbody th,table.dataTable.compact tbody td{padding:4px}table.dataTable th.dt-left,table.dataTable td.dt-left{text-align:left}table.dataTable th.dt-center,table.dataTable td.dt-center,table.dataTable td.dataTables_empty{text-align:center}table.dataTable th.dt-right,table.dataTable td.dt-right{text-align:right}table.dataTable th.dt-justify,table.dataTable td.dt-justify{text-align:justify}table.dataTable th.dt-nowrap,table.dataTable td.dt-nowrap{white-space:nowrap}table.dataTable thead th.dt-head-left,table.dataTable thead td.dt-head-left,table.dataTable tfoot th.dt-head-left,table.dataTable tfoot td.dt-head-left{text-align:left}table.dataTable thead th.dt-head-center,table.dataTable thead td.dt-head-center,table.dataTable tfoot th.dt-head-center,table.dataTable tfoot td.dt-head-center{text-align:center}table.dataTable thead th.dt-head-right,table.dataTable thead td.dt-head-right,table.dataTable tfoot th.dt-head-right,table.dataTable tfoot td.dt-head-right{text-align:right}table.dataTable thead th.dt-head-justify,table.dataTable thead td.dt-head-justify,table.dataTable tfoot th.dt-head-justify,table.dataTable tfoot td.dt-head-justify{text-align:justify}table.dataTable thead th.dt-head-nowrap,table.dataTable thead td.dt-head-nowrap,table.dataTable tfoot th.dt-head-nowrap,table.dataTable tfoot td.dt-head-nowrap{white-space:nowrap}table.dataTable tbody th.dt-body-left,table.dataTable tbody td.dt-body-left{text-align:left}table.dataTable tbody th.dt-body-center,table.dataTable tbody td.dt-body-center{text-align:center}table.dataTable tbody th.dt-body-right,table.dataTable tbody td.dt-body-right{text-align:right}table.dataTable tbody th.dt-body-justify,table.dataTable tbody td.dt-body-justify{text-align:justify}table.dataTable tbody th.dt-body-nowrap,table.dataTable tbody td.dt-body-nowrap{white-space:nowrap}table.dataTable,table.dataTable th,table.dataTable td{-webkit-box-sizing:content-box;box-sizing:content-box}.dataTables_wrapper{position:relative;clear:both;*zoom:1;zoom:1}.dataTables_wrapper .dataTables_length{float:left}.dataTables_wrapper .dataTables_filter{float:right;text-align:right}.dataTables_wrapper .dataTables_filter input{margin-left:0.5em}.dataTables_wrapper .dataTables_info{clear:both;float:left;padding-top:0.755em}.dataTables_wrapper .dataTables_paginate{float:right;text-align:right;padding-top:0.25em}.dataTables_wrapper .dataTables_paginate .paginate_button{box-sizing:border-box;display:inline-block;min-width:1.5em;padding:0.5em 1em;margin-left:2px;text-align:center;text-decoration:none !important;cursor:pointer;*cursor:hand;color:#333 !important;border:1px solid transparent;border-radius:2px}.dataTables_wrapper .dataTables_paginate .paginate_button.current,.dataTables_wrapper .dataTables_paginate .paginate_button.current:hover{color:#333 !important;border:1px solid #979797;background-color:white;background:-webkit-gradient(linear, left top, left bottom, color-stop(0%, #fff), color-stop(100%, #dcdcdc));background:-webkit-linear-gradient(top, #fff 0%, #dcdcdc 100%);background:-moz-linear-gradient(top, #fff 0%, #dcdcdc 100%);background:-ms-linear-gradient(top, #fff 0%, #dcdcdc 100%);background:-o-linear-gradient(top, #fff 0%, #dcdcdc 100%);background:linear-gradient(to bottom, #fff 0%, #dcdcdc 100%)}.dataTables_wrapper .dataTables_paginate .paginate_button.disabled,.dataTables_wrapper .dataTables_paginate .paginate_button.disabled:hover,.dataTables_wrapper .dataTables_paginate .paginate_button.disabled:active{cursor:default;color:#666 !important;border:1px solid transparent;background:transparent;box-shadow:none}.dataTables_wrapper .dataTables_paginate .paginate_button:hover{color:white !important;border:1px solid #111;background-color:#585858;background:-webkit-gradient(linear, left top, left bottom, color-stop(0%, #585858), color-stop(100%, #111));background:-webkit-linear-gradient(top, #585858 0%, #111 100%);background:-moz-linear-gradient(top, #585858 0%, #111 100%);background:-ms-linear-gradient(top, #585858 0%, #111 100%);background:-o-linear-gradient(top, #585858 0%, #111 100%);background:linear-gradient(to bottom, #585858 0%, #111 100%)}.dataTables_wrapper .dataTables_paginate .paginate_button:active{outline:none;background-color:#2b2b2b;background:-webkit-gradient(linear, left top, left bottom, color-stop(0%, #2b2b2b), color-stop(100%, #0c0c0c));background:-webkit-linear-gradient(top, #2b2b2b 0%, #0c0c0c 100%);background:-moz-linear-gradient(top, #2b2b2b 0%, #0c0c0c 100%);background:-ms-linear-gradient(top, #2b2b2b 0%, #0c0c0c 100%);background:-o-linear-gradient(top, #2b2b2b 0%, #0c0c0c 100%);background:linear-gradient(to bottom, #2b2b2b 0%, #0c0c0c 100%);box-shadow:inset 0 0 3px #111}.dataTables_wrapper .dataTables_paginate .ellipsis{padding:0 1em}.dataTables_wrapper .dataTables_processing{position:absolute;top:50%;left:50%;width:100%;height:40px;margin-left:-50%;margin-top:-25px;padding-top:20px;text-align:center;font-size:1.2em;background-color:white;background:-webkit-gradient(linear, left top, right top, color-stop(0%, rgba(255,255,255,0)), color-stop(25%, rgba(255,255,255,0.9)), color-stop(75%, rgba(255,255,255,0.9)), color-stop(100%, rgba(255,255,255,0)));background:-webkit-linear-gradient(left, rgba(255,255,255,0) 0%, rgba(255,255,255,0.9) 25%, rgba(255,255,255,0.9) 75%, rgba(255,255,255,0) 100%);background:-moz-linear-gradient(left, rgba(255,255,255,0) 0%, rgba(255,255,255,0.9) 25%, rgba(255,255,255,0.9) 75%, rgba(255,255,255,0) 100%);background:-ms-linear-gradient(left, rgba(255,255,255,0) 0%, rgba(255,255,255,0.9) 25%, rgba(255,255,255,0.9) 75%, rgba(255,255,255,0) 100%);background:-o-linear-gradient(left, rgba(255,255,255,0) 0%, rgba(255,255,255,0.9) 25%, rgba(255,255,255,0.9) 75%, rgba(255,255,255,0) 100%);background:linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(255,255,255,0.9) 25%, rgba(255,255,255,0.9) 75%, rgba(255,255,255,0) 100%)}.dataTables_wrapper .dataTables_length,.dataTables_wrapper .dataTables_filter,.dataTables_wrapper .dataTables_info,.dataTables_wrapper .dataTables_processing,.dataTables_wrapper .dataTables_paginate{color:#333}.dataTables_wrapper .dataTables_scroll{clear:both}.dataTables_wrapper .dataTables_scroll div.dataTables_scrollBody{*margin-top:-1px;-webkit-overflow-scrolling:touch}.dataTables_wrapper .dataTables_scroll div.dataTables_scrollBody>table>thead>tr>th,.dataTables_wrapper .dataTables_scroll div.dataTables_scrollBody>table>thead>tr>td,.dataTables_wrapper .dataTables_scroll div.dataTables_scrollBody>table>tbody>tr>th,.dataTables_wrapper .dataTables_scroll div.dataTables_scrollBody>table>tbody>tr>td{vertical-align:middle}.dataTables_wrapper .dataTables_scroll div.dataTables_scrollBody>table>thead>tr>th>div.dataTables_sizing,.dataTables_wrapper .dataTables_scroll div.dataTables_scrollBody>table>thead>tr>td>div.dataTables_sizing,.dataTables_wrapper .dataTables_scroll div.dataTables_scrollBody>table>tbody>tr>th>div.dataTables_sizing,.dataTables_wrapper .dataTables_scroll div.dataTables_scrollBody>table>tbody>tr>td>div.dataTables_sizing{height:0;overflow:hidden;margin:0 !important;padding:0 !important}.dataTables_wrapper.no-footer .dataTables_scrollBody{border-bottom:1px solid #111}.dataTables_wrapper.no-footer div.dataTables_scrollHead>table,.dataTables_wrapper.no-footer div.dataTables_scrollBody>table{border-bottom:none}.dataTables_wrapper:after{visibility:hidden;display:block;content:\"\";clear:both;height:0}@media screen and (max-width: 767px){.dataTables_wrapper .dataTables_info,.dataTables_wrapper .dataTables_paginate{float:none;text-align:center}.dataTables_wrapper .dataTables_paginate{margin-top:0.5em}}@media screen and (max-width: 640px){.dataTables_wrapper .dataTables_length,.dataTables_wrapper .dataTables_filter{float:none;text-align:center}.dataTables_wrapper .dataTables_filter{margin-top:0.5em}}\n", ""]);

// exports


/***/ }),

/***/ 201:
/***/ (function(module, exports) {

module.exports = "/images/sort_both.png?d012efb263431f6e63699886a239daf5";

/***/ }),

/***/ 202:
/***/ (function(module, exports) {

module.exports = "/images/sort_asc.png?b55d4488b71419fa7d95fce0faa68559";

/***/ }),

/***/ 203:
/***/ (function(module, exports) {

module.exports = "/images/sort_desc.png?9083637c24e74024959f962612312b20";

/***/ }),

/***/ 204:
/***/ (function(module, exports) {

module.exports = "/images/sort_asc_disabled.png?7fa998ede4f84acdd88ce49e1b3882b2";

/***/ }),

/***/ 205:
/***/ (function(module, exports) {

module.exports = "/images/sort_desc_disabled.png?d37e43b5328ef55e49e4b5087a5f4b9a";

/***/ }),

/***/ 206:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(207);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(78)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!./pagination.css", function() {
			var newContent = require("!!../../../../../../node_modules/css-loader/index.js!./pagination.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 207:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "\n@charset \"UTF-8\";\n\n/*ccs-1*/\n.whj_jqueryPaginationCss-1{\n    display: inline-block;\n    padding: 5px;\n    user-select: none;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n}\n.whj_jqueryPaginationCss-1 div{\n    display: inline-block;\n    vertical-align: bottom;\n    /* height: 24px; */\n    line-height: 24px;\n}\n.whj_jqueryPaginationCss-1 .whj_padding{\n    padding: 5px 13px;\n}\n.whj_jqueryPaginationCss-1 .whj_bgc{\n    border-radius: 4px;\n    background-color: #fff;\n    color: #666666;\n}\n.whj_jqueryPaginationCss-1 .whj_border{\n    border: 1px solid #eeeeee;\n}\n.whj_jqueryPaginationCss-1 .whj_color{\n    color: #9a9a9a;\n}\n.whj_jqueryPaginationCss-1 .to_page_color{\n    color: #666666;\n}\n.whj_jqueryPaginationCss-1 .whj_hover:hover{\n    background-color: #33cc66;\n    color: #ffffff;\n    cursor: pointer;\n}\n.whj_jqueryPaginationCss-1 .whj_checked{\n    background-color: #33cc66;\n    color: #ffffff;\n}\n.whj_jqueryPaginationCss-1 .whj_hoverDisable{\n    opacity: 0.5;\n}\n.whj_jqueryPaginationCss-1 select{\n    height: 28px;\n    vertical-align: bottom;\n    padding: 0px;\n    outline: none;\n}\n.whj_jqueryPaginationCss-1 input{\n    padding: 0px;\n    width: 36px;\n    height: 36px;\n    border-radius: 4px;\n    outline: none;\n    text-align: center;\n    vertical-align: bottom;\n}\n.whj_jqueryPaginationCss-1 div,.whj_jqueryPaginationCss-1 input,.whj_jqueryPaginationCss-1 select{\n    margin: 0 4px;\n}\n\n/*ccs-2*/\n.whj_jqueryPaginationCss-2{\n    display: inline-block;\n    padding: 5px;\n    user-select: none;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n}\n.whj_jqueryPaginationCss-2 div{\n    display: inline-block;\n    vertical-align: bottom;\n    /* height: 24px; */\n    line-height: 24px;\n}\n.whj_jqueryPaginationCss-2 .whj_padding{\n    padding: 1px 9px;\n}\n.whj_jqueryPaginationCss-2 .whj_bgc{\n    background-color: #5194ca;\n    color: #fff;\n}\n.whj_jqueryPaginationCss-2 .whj_border{\n    border: 1px solid #5194ca;\n}\n.whj_jqueryPaginationCss-2 .whj_color{\n    color: #5194ca;\n}\n.whj_jqueryPaginationCss-2 .whj_hover:hover{\n    background-color: #d4f1ff;\n    color: #5194ca;\n    cursor: pointer;\n}\n.whj_jqueryPaginationCss-2 .whj_checked{\n    background-color: #d4f1ff;\n    color: #5194ca;\n}\n.whj_jqueryPaginationCss-2 .whj_hoverDisable{\n    opacity: 0.7;\n}\n.whj_jqueryPaginationCss-2 select{\n    height: 28px;\n    vertical-align: bottom;\n    padding: 0px;\n    outline: none;\n}\n.whj_jqueryPaginationCss-2 input{\n    padding: 0px;\n    height: 26px;\n    outline: none;\n    text-align: center;\n    width: 60px;\n    vertical-align: bottom;\n}\n.whj_jqueryPaginationCss-2 div,.whj_jqueryPaginationCss-2 input,.whj_jqueryPaginationCss-2 select{\n    margin: 0 4px;\n}\n\n/*ccs-3*/\n.whj_jqueryPaginationCss-3{\n    display: inline-block;\n    padding: 5px;\n    user-select: none;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n}\n.whj_jqueryPaginationCss-3 div{\n    display: inline-block;\n    vertical-align: bottom;\n    /* height: 24px; */\n    line-height: 24px;\n}\n.whj_jqueryPaginationCss-3 .whj_padding{\n    padding: 1px 9px;\n}\n.whj_jqueryPaginationCss-3 .whj_bgc{\n    background-color: #7a7b7b;\n    color: #fff;\n}\n.whj_jqueryPaginationCss-3 .whj_border{\n    border: 1px solid #929292;\n}\n.whj_jqueryPaginationCss-3 .whj_color{\n    color: #929292;\n}\n.whj_jqueryPaginationCss-3 .whj_hover:hover{\n    background-color: #e0dddd;\n    color: #7a7b7b;\n    cursor: pointer;\n}\n.whj_jqueryPaginationCss-3 .whj_checked{\n    background-color: #e0dddd;\n    color: #7a7b7b;\n}\n.whj_jqueryPaginationCss-3 .whj_hoverDisable{\n    opacity: 0.5;\n}\n.whj_jqueryPaginationCss-3 select{\n    height: 28px;\n    vertical-align: bottom;\n    padding: 0px;\n    outline: none;\n}\n.whj_jqueryPaginationCss-3 input{\n    padding: 0px;\n    height: 26px;\n    outline: none;\n    text-align: center;\n    width: 60px;\n    vertical-align: bottom;\n}\n.whj_jqueryPaginationCss-3 div,.whj_jqueryPaginationCss-3 input,.whj_jqueryPaginationCss-3 select{\n    margin: 0 4px;\n}\n\n/*ccs-4*/\n.whj_jqueryPaginationCss-4{\n    display: inline-block;\n    padding: 5px;\n    user-select: none;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n}\n.whj_jqueryPaginationCss-4 div{\n    display: inline-block;\n    vertical-align: bottom;\n    /* height: 24px; */\n    line-height: 24px;\n}\n.whj_jqueryPaginationCss-4 .whj_padding{\n    padding: 1px 9px;\n}\n.whj_jqueryPaginationCss-4 .whj_bgc{\n    background-color: #f5f5f5;\n    color: #907272;\n}\n.whj_jqueryPaginationCss-4 .whj_border{\n    border: 1px solid #907272;\n}\n.whj_jqueryPaginationCss-4 .whj_color{\n    color: #907272;\n}\n.whj_jqueryPaginationCss-4 .whj_hover:hover{\n    background-color: #afacac;\n    color: #fff;\n    cursor: pointer;\n}\n.whj_jqueryPaginationCss-4 .whj_checked{\n    background-color: #afacac;\n    color: #fff;\n}\n.whj_jqueryPaginationCss-4 .whj_hoverDisable{\n    opacity: 0.5;\n}\n.whj_jqueryPaginationCss-4 select{\n    height: 28px;\n    vertical-align: bottom;\n    padding: 0px;\n    outline: none;\n}\n.whj_jqueryPaginationCss-4 input{\n    padding: 0px;\n    height: 26px;\n    outline: none;\n    text-align: center;\n    width: 60px;\n    vertical-align: bottom;\n}\n.whj_jqueryPaginationCss-4 div,.whj_jqueryPaginationCss-4 input,.whj_jqueryPaginationCss-4 select{\n    margin: 0 4px;\n}\n\n/*ccs-5*/\n.whj_jqueryPaginationCss-5{\n    display: inline-block;\n    padding: 5px;\n    user-select: none;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n}\n.whj_jqueryPaginationCss-5 div{\n    display: inline-block;\n    vertical-align: bottom;\n    /* height: 24px; */\n    line-height: 24px;\n}\n.whj_jqueryPaginationCss-5 .whj_padding{\n    padding: 1px 9px;\n}\n.whj_jqueryPaginationCss-5 .whj_bgc{\n    background-color: #199eaf;\n    color: #fff;\n}\n.whj_jqueryPaginationCss-5 .whj_border{\n    border: 1px solid #199eaf;\n}\n.whj_jqueryPaginationCss-5 .whj_color{\n    color: #199eaf;\n}\n.whj_jqueryPaginationCss-5 .whj_hover:hover{\n    background-color: #d4f1ff;\n    color: #199eaf;\n    cursor: pointer;\n}\n.whj_jqueryPaginationCss-5 .whj_checked{\n    background-color: #d4f1ff;\n    color: #199eaf;\n}\n.whj_jqueryPaginationCss-5 .whj_hoverDisable{\n    opacity: 0.5;\n}\n.whj_jqueryPaginationCss-5 select{\n    height: 28px;\n    vertical-align: bottom;\n    padding: 0px;\n    outline: none;\n}\n.whj_jqueryPaginationCss-5 input{\n    padding: 0px;\n    height: 26px;\n    outline: none;\n    text-align: center;\n    width: 60px;\n    vertical-align: bottom;\n}\n.whj_jqueryPaginationCss-5 div,.whj_jqueryPaginationCss-5 input,.whj_jqueryPaginationCss-5 select{\n    margin: 0 4px;\n}\n", ""]);

// exports


/***/ }),

/***/ 208:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*!
 * @copyright Copyright &copy; Kartik Visweswaran, Krajee.com, 2014 - 2015
 * @version 1.3.3
 *
 * Date formatter utility library that allows formatting date/time variables or Date objects using PHP DateTime format.
 * @see http://php.net/manual/en/function.date.php
 *
 * For more JQuery plugins visit http://plugins.krajee.com
 * For more Yii related demos visit http://demos.krajee.com
 */

if (!window.jQuery) {
    var jQuery = __webpack_require__(17);
} else {
    var jQuery = window.jQuery;
}

var DateFormatter;
(function ($) {
    "use strict";

    var _compare, _lpad2, _extend2, defaultSettings, DAY, HOUR;
    DAY = 1000 * 60 * 60 * 24;
    HOUR = 3600;

    _compare = function _compare(str1, str2) {
        return typeof str1 === 'string' && typeof str2 === 'string' && str1.toLowerCase() === str2.toLowerCase();
    };
    _lpad2 = function _lpad(value, length, char) {
        var chr = char || '0',
            val = value.toString();
        return val.length < length ? _lpad2(chr + val, length) : val;
    };
    _extend2 = function _extend(out) {
        var i, obj;
        out = out || {};
        for (i = 1; i < arguments.length; i++) {
            obj = arguments[i];
            if (!obj) {
                continue;
            }
            for (var key in obj) {
                if (obj.hasOwnProperty(key)) {
                    if (_typeof(obj[key]) === 'object') {
                        _extend2(out[key], obj[key]);
                    } else {
                        out[key] = obj[key];
                    }
                }
            }
        }
        return out;
    };
    defaultSettings = {
        dateSettings: {
            days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
            daysShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
            months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            monthsShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            meridiem: ['AM', 'PM'],
            ordinal: function ordinal(number) {
                var n = number % 10,
                    suffixes = { 1: 'st', 2: 'nd', 3: 'rd' };
                return Math.floor(number % 100 / 10) === 1 || !suffixes[n] ? 'th' : suffixes[n];
            }
        },
        separators: /[ \-+\/\.T:@]/g,
        validParts: /[dDjlNSwzWFmMntLoYyaABgGhHisueTIOPZcrU]/g,
        intParts: /[djwNzmnyYhHgGis]/g,
        tzParts: /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,
        tzClip: /[^-+\dA-Z]/g
    };

    DateFormatter = function DateFormatter(options) {
        var self = this,
            config = _extend2(defaultSettings, options);
        self.dateSettings = config.dateSettings;
        self.separators = config.separators;
        self.validParts = config.validParts;
        self.intParts = config.intParts;
        self.tzParts = config.tzParts;
        self.tzClip = config.tzClip;
    };

    DateFormatter.prototype = {
        constructor: DateFormatter,
        parseDate: function parseDate(vDate, vFormat) {
            var self = this,
                vFormatParts,
                vDateParts,
                i,
                vDateFlag = false,
                vTimeFlag = false,
                vDatePart,
                iDatePart,
                vSettings = self.dateSettings,
                vMonth,
                vMeriIndex,
                vMeriOffset,
                len,
                mer,
                out = { date: null, year: null, month: null, day: null, hour: 0, min: 0, sec: 0 };
            if (!vDate) {
                return undefined;
            }
            if (vDate instanceof Date) {
                return vDate;
            }
            if (typeof vDate === 'number') {
                return new Date(vDate);
            }
            if (vFormat === 'U') {
                i = parseInt(vDate);
                return i ? new Date(i * 1000) : vDate;
            }
            if (typeof vDate !== 'string') {
                return '';
            }
            vFormatParts = vFormat.match(self.validParts);
            if (!vFormatParts || vFormatParts.length === 0) {
                throw new Error("Invalid date format definition.");
            }
            vDateParts = vDate.replace(self.separators, '\0').split('\0');
            for (i = 0; i < vDateParts.length; i++) {
                vDatePart = vDateParts[i];
                iDatePart = parseInt(vDatePart);
                switch (vFormatParts[i]) {
                    case 'y':
                    case 'Y':
                        len = vDatePart.length;
                        if (len === 2) {
                            out.year = parseInt((iDatePart < 70 ? '20' : '19') + vDatePart);
                        } else if (len === 4) {
                            out.year = iDatePart;
                        }
                        vDateFlag = true;
                        break;
                    case 'm':
                    case 'n':
                    case 'M':
                    case 'F':
                        if (isNaN(vDatePart)) {
                            vMonth = vSettings.monthsShort.indexOf(vDatePart);
                            if (vMonth > -1) {
                                out.month = vMonth + 1;
                            }
                            vMonth = vSettings.months.indexOf(vDatePart);
                            if (vMonth > -1) {
                                out.month = vMonth + 1;
                            }
                        } else {
                            if (iDatePart >= 1 && iDatePart <= 12) {
                                out.month = iDatePart;
                            }
                        }
                        vDateFlag = true;
                        break;
                    case 'd':
                    case 'j':
                        if (iDatePart >= 1 && iDatePart <= 31) {
                            out.day = iDatePart;
                        }
                        vDateFlag = true;
                        break;
                    case 'g':
                    case 'h':
                        vMeriIndex = vFormatParts.indexOf('a') > -1 ? vFormatParts.indexOf('a') : vFormatParts.indexOf('A') > -1 ? vFormatParts.indexOf('A') : -1;
                        mer = vDateParts[vMeriIndex];
                        if (vMeriIndex > -1) {
                            vMeriOffset = _compare(mer, vSettings.meridiem[0]) ? 0 : _compare(mer, vSettings.meridiem[1]) ? 12 : -1;
                            if (iDatePart >= 1 && iDatePart <= 12 && vMeriOffset > -1) {
                                out.hour = iDatePart + vMeriOffset;
                            } else if (iDatePart >= 0 && iDatePart <= 23) {
                                out.hour = iDatePart;
                            }
                        } else if (iDatePart >= 0 && iDatePart <= 23) {
                            out.hour = iDatePart;
                        }
                        vTimeFlag = true;
                        break;
                    case 'G':
                    case 'H':
                        if (iDatePart >= 0 && iDatePart <= 23) {
                            out.hour = iDatePart;
                        }
                        vTimeFlag = true;
                        break;
                    case 'i':
                        if (iDatePart >= 0 && iDatePart <= 59) {
                            out.min = iDatePart;
                        }
                        vTimeFlag = true;
                        break;
                    case 's':
                        if (iDatePart >= 0 && iDatePart <= 59) {
                            out.sec = iDatePart;
                        }
                        vTimeFlag = true;
                        break;
                }
            }
            if (vDateFlag === true && out.year && out.month && out.day) {
                out.date = new Date(out.year, out.month - 1, out.day, out.hour, out.min, out.sec, 0);
            } else {
                if (vTimeFlag !== true) {
                    return false;
                }
                out.date = new Date(0, 0, 0, out.hour, out.min, out.sec, 0);
            }
            return out.date;
        },
        guessDate: function guessDate(vDateStr, vFormat) {
            if (typeof vDateStr !== 'string') {
                return vDateStr;
            }
            var self = this,
                vParts = vDateStr.replace(self.separators, '\0').split('\0'),
                vPattern = /^[djmn]/g,
                vFormatParts = vFormat.match(self.validParts),
                vDate = new Date(),
                vDigit = 0,
                vYear,
                i,
                iPart,
                iSec;

            if (!vPattern.test(vFormatParts[0])) {
                return vDateStr;
            }

            for (i = 0; i < vParts.length; i++) {
                vDigit = 2;
                iPart = vParts[i];
                iSec = parseInt(iPart.substr(0, 2));
                switch (i) {
                    case 0:
                        if (vFormatParts[0] === 'm' || vFormatParts[0] === 'n') {
                            vDate.setMonth(iSec - 1);
                        } else {
                            vDate.setDate(iSec);
                        }
                        break;
                    case 1:
                        if (vFormatParts[0] === 'm' || vFormatParts[0] === 'n') {
                            vDate.setDate(iSec);
                        } else {
                            vDate.setMonth(iSec - 1);
                        }
                        break;
                    case 2:
                        vYear = vDate.getFullYear();
                        if (iPart.length < 4) {
                            vDate.setFullYear(parseInt(vYear.toString().substr(0, 4 - iPart.length) + iPart));
                            vDigit = iPart.length;
                        } else {
                            vDate.setFullYear = parseInt(iPart.substr(0, 4));
                            vDigit = 4;
                        }
                        break;
                    case 3:
                        vDate.setHours(iSec);
                        break;
                    case 4:
                        vDate.setMinutes(iSec);
                        break;
                    case 5:
                        vDate.setSeconds(iSec);
                        break;
                }
                if (iPart.substr(vDigit).length > 0) {
                    vParts.splice(i + 1, 0, iPart.substr(vDigit));
                }
            }
            return vDate;
        },
        parseFormat: function parseFormat(vChar, vDate) {
            var self = this,
                vSettings = self.dateSettings,
                fmt,
                backspace = /\\?(.?)/gi,
                doFormat = function doFormat(t, s) {
                return fmt[t] ? fmt[t]() : s;
            };
            fmt = {
                /////////
                // DAY //
                /////////
                /**
                 * Day of month with leading 0: `01..31`
                 * @return {string}
                 */
                d: function d() {
                    return _lpad2(fmt.j(), 2);
                },
                /**
                 * Shorthand day name: `Mon...Sun`
                 * @return {string}
                 */
                D: function D() {
                    return vSettings.daysShort[fmt.w()];
                },
                /**
                 * Day of month: `1..31`
                 * @return {number}
                 */
                j: function j() {
                    return vDate.getDate();
                },
                /**
                 * Full day name: `Monday...Sunday`
                 * @return {number}
                 */
                l: function l() {
                    return vSettings.days[fmt.w()];
                },
                /**
                 * ISO-8601 day of week: `1[Mon]..7[Sun]`
                 * @return {number}
                 */
                N: function N() {
                    return fmt.w() || 7;
                },
                /**
                 * Day of week: `0[Sun]..6[Sat]`
                 * @return {number}
                 */
                w: function w() {
                    return vDate.getDay();
                },
                /**
                 * Day of year: `0..365`
                 * @return {number}
                 */
                z: function z() {
                    var a = new Date(fmt.Y(), fmt.n() - 1, fmt.j()),
                        b = new Date(fmt.Y(), 0, 1);
                    return Math.round((a - b) / DAY);
                },

                //////////
                // WEEK //
                //////////
                /**
                 * ISO-8601 week number
                 * @return {number}
                 */
                W: function W() {
                    var a = new Date(fmt.Y(), fmt.n() - 1, fmt.j() - fmt.N() + 3),
                        b = new Date(a.getFullYear(), 0, 4);
                    return _lpad2(1 + Math.round((a - b) / DAY / 7), 2);
                },

                ///////////
                // MONTH //
                ///////////
                /**
                 * Full month name: `January...December`
                 * @return {string}
                 */
                F: function F() {
                    return vSettings.months[vDate.getMonth()];
                },
                /**
                 * Month w/leading 0: `01..12`
                 * @return {string}
                 */
                m: function m() {
                    return _lpad2(fmt.n(), 2);
                },
                /**
                 * Shorthand month name; `Jan...Dec`
                 * @return {string}
                 */
                M: function M() {
                    return vSettings.monthsShort[vDate.getMonth()];
                },
                /**
                 * Month: `1...12`
                 * @return {number}
                 */
                n: function n() {
                    return vDate.getMonth() + 1;
                },
                /**
                 * Days in month: `28...31`
                 * @return {number}
                 */
                t: function t() {
                    return new Date(fmt.Y(), fmt.n(), 0).getDate();
                },

                //////////
                // YEAR //
                //////////
                /**
                 * Is leap year? `0 or 1`
                 * @return {number}
                 */
                L: function L() {
                    var Y = fmt.Y();
                    return Y % 4 === 0 && Y % 100 !== 0 || Y % 400 === 0 ? 1 : 0;
                },
                /**
                 * ISO-8601 year
                 * @return {number}
                 */
                o: function o() {
                    var n = fmt.n(),
                        W = fmt.W(),
                        Y = fmt.Y();
                    return Y + (n === 12 && W < 9 ? 1 : n === 1 && W > 9 ? -1 : 0);
                },
                /**
                 * Full year: `e.g. 1980...2010`
                 * @return {number}
                 */
                Y: function Y() {
                    return vDate.getFullYear();
                },
                /**
                 * Last two digits of year: `00...99`
                 * @return {string}
                 */
                y: function y() {
                    return fmt.Y().toString().slice(-2);
                },

                //////////
                // TIME //
                //////////
                /**
                 * Meridian lower: `am or pm`
                 * @return {string}
                 */
                a: function a() {
                    return fmt.A().toLowerCase();
                },
                /**
                 * Meridian upper: `AM or PM`
                 * @return {string}
                 */
                A: function A() {
                    var n = fmt.G() < 12 ? 0 : 1;
                    return vSettings.meridiem[n];
                },
                /**
                 * Swatch Internet time: `000..999`
                 * @return {string}
                 */
                B: function B() {
                    var H = vDate.getUTCHours() * HOUR,
                        i = vDate.getUTCMinutes() * 60,
                        s = vDate.getUTCSeconds();
                    return _lpad2(Math.floor((H + i + s + HOUR) / 86.4) % 1000, 3);
                },
                /**
                 * 12-Hours: `1..12`
                 * @return {number}
                 */
                g: function g() {
                    return fmt.G() % 12 || 12;
                },
                /**
                 * 24-Hours: `0..23`
                 * @return {number}
                 */
                G: function G() {
                    return vDate.getHours();
                },
                /**
                 * 12-Hours with leading 0: `01..12`
                 * @return {string}
                 */
                h: function h() {
                    return _lpad2(fmt.g(), 2);
                },
                /**
                 * 24-Hours w/leading 0: `00..23`
                 * @return {string}
                 */
                H: function H() {
                    return _lpad2(fmt.G(), 2);
                },
                /**
                 * Minutes w/leading 0: `00..59`
                 * @return {string}
                 */
                i: function i() {
                    return _lpad2(vDate.getMinutes(), 2);
                },
                /**
                 * Seconds w/leading 0: `00..59`
                 * @return {string}
                 */
                s: function s() {
                    return _lpad2(vDate.getSeconds(), 2);
                },
                /**
                 * Microseconds: `000000-999000`
                 * @return {string}
                 */
                u: function u() {
                    return _lpad2(vDate.getMilliseconds() * 1000, 6);
                },

                //////////////
                // TIMEZONE //
                //////////////
                /**
                 * Timezone identifier: `e.g. Atlantic/Azores, ...`
                 * @return {string}
                 */
                e: function e() {
                    var str = /\((.*)\)/.exec(String(vDate))[1];
                    return str || 'Coordinated Universal Time';
                },
                /**
                 * Timezone abbreviation: `e.g. EST, MDT, ...`
                 * @return {string}
                 */
                T: function T() {
                    var str = (String(vDate).match(self.tzParts) || [""]).pop().replace(self.tzClip, "");
                    return str || 'UTC';
                },
                /**
                 * DST observed? `0 or 1`
                 * @return {number}
                 */
                I: function I() {
                    var a = new Date(fmt.Y(), 0),
                        c = Date.UTC(fmt.Y(), 0),
                        b = new Date(fmt.Y(), 6),
                        d = Date.UTC(fmt.Y(), 6);
                    return a - c !== b - d ? 1 : 0;
                },
                /**
                 * Difference to GMT in hour format: `e.g. +0200`
                 * @return {string}
                 */
                O: function O() {
                    var tzo = vDate.getTimezoneOffset(),
                        a = Math.abs(tzo);
                    return (tzo > 0 ? '-' : '+') + _lpad2(Math.floor(a / 60) * 100 + a % 60, 4);
                },
                /**
                 * Difference to GMT with colon: `e.g. +02:00`
                 * @return {string}
                 */
                P: function P() {
                    var O = fmt.O();
                    return O.substr(0, 3) + ':' + O.substr(3, 2);
                },
                /**
                 * Timezone offset in seconds: `-43200...50400`
                 * @return {number}
                 */
                Z: function Z() {
                    return -vDate.getTimezoneOffset() * 60;
                },

                ////////////////////
                // FULL DATE TIME //
                ////////////////////
                /**
                 * ISO-8601 date
                 * @return {string}
                 */
                c: function c() {
                    return 'Y-m-d\\TH:i:sP'.replace(backspace, doFormat);
                },
                /**
                 * RFC 2822 date
                 * @return {string}
                 */
                r: function r() {
                    return 'D, d M Y H:i:s O'.replace(backspace, doFormat);
                },
                /**
                 * Seconds since UNIX epoch
                 * @return {number}
                 */
                U: function U() {
                    return vDate.getTime() / 1000 || 0;
                }
            };
            return doFormat(vChar, vChar);
        },
        formatDate: function formatDate(vDate, vFormat) {
            var self = this,
                i,
                n,
                len,
                str,
                vChar,
                vDateStr = '';
            if (typeof vDate === 'string') {
                vDate = self.parseDate(vDate, vFormat);
                if (vDate === false) {
                    return false;
                }
            }
            if (vDate instanceof Date) {
                len = vFormat.length;
                for (i = 0; i < len; i++) {
                    vChar = vFormat.charAt(i);
                    if (vChar === 'S') {
                        continue;
                    }
                    str = self.parseFormat(vChar, vDate);
                    if (i !== len - 1 && self.intParts.test(vChar) && vFormat.charAt(i + 1) === 'S') {
                        n = parseInt(str);
                        str += self.dateSettings.ordinal(n);
                    }
                    vDateStr += str;
                }
                return vDateStr;
            }
            return '';
        }
    };
})(); /**
      * @preserve jQuery DateTimePicker plugin v2.5.4
      * @homepage http://xdsoft.net/jqplugins/datetimepicker/
      * @author Chupurnov Valeriy (<chupurnov@gmail.com>)
      */
/*global DateFormatter, document,window,jQuery,setTimeout,clearTimeout,HighlightedDate,getCurrentValue*/
;(function (factory) {
    if (true) {
        // AMD. Register as an anonymous module.
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(17), __webpack_require__(209)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if ((typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object') {
        // Node/CommonJS style for Browserify
        module.exports = factory;
    } else {
        // Browser globals
        factory(jQuery);
    }
})(function ($) {
    'use strict';

    var currentlyScrollingTimeDiv = false;

    var default_options = {
        i18n: {
            ar: { // Arabic
                months: ["كانون الثاني", "شباط", "آذار", "نيسان", "مايو", "حزيران", "تموز", "آب", "أيلول", "تشرين الأول", "تشرين الثاني", "كانون الأول"],
                dayOfWeekShort: ["ن", "ث", "ع", "خ", "ج", "س", "ح"],
                dayOfWeek: ["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت", "الأحد"]
            },
            ro: { // Romanian
                months: ["Ianuarie", "Februarie", "Martie", "Aprilie", "Mai", "Iunie", "Iulie", "August", "Septembrie", "Octombrie", "Noiembrie", "Decembrie"],
                dayOfWeekShort: ["Du", "Lu", "Ma", "Mi", "Jo", "Vi", "Sâ"],
                dayOfWeek: ["Duminică", "Luni", "Marţi", "Miercuri", "Joi", "Vineri", "Sâmbătă"]
            },
            id: { // Indonesian
                months: ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"],
                dayOfWeekShort: ["Min", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"],
                dayOfWeek: ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"]
            },
            is: { // Icelandic
                months: ["Janúar", "Febrúar", "Mars", "Apríl", "Maí", "Júní", "Júlí", "Ágúst", "September", "Október", "Nóvember", "Desember"],
                dayOfWeekShort: ["Sun", "Mán", "Þrið", "Mið", "Fim", "Fös", "Lau"],
                dayOfWeek: ["Sunnudagur", "Mánudagur", "Þriðjudagur", "Miðvikudagur", "Fimmtudagur", "Föstudagur", "Laugardagur"]
            },
            bg: { // Bulgarian
                months: ["Януари", "Февруари", "Март", "Април", "Май", "Юни", "Юли", "Август", "Септември", "Октомври", "Ноември", "Декември"],
                dayOfWeekShort: ["Нд", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
                dayOfWeek: ["Неделя", "Понеделник", "Вторник", "Сряда", "Четвъртък", "Петък", "Събота"]
            },
            fa: { // Persian/Farsi
                months: ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور', 'مهر', 'آبان', 'آذر', 'دی', 'بهمن', 'اسفند'],
                dayOfWeekShort: ['یکشنبه', 'دوشنبه', 'سه شنبه', 'چهارشنبه', 'پنجشنبه', 'جمعه', 'شنبه'],
                dayOfWeek: ["یک‌شنبه", "دوشنبه", "سه‌شنبه", "چهارشنبه", "پنج‌شنبه", "جمعه", "شنبه", "یک‌شنبه"]
            },
            ru: { // Russian
                months: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
                dayOfWeekShort: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
                dayOfWeek: ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"]
            },
            uk: { // Ukrainian
                months: ['Січень', 'Лютий', 'Березень', 'Квітень', 'Травень', 'Червень', 'Липень', 'Серпень', 'Вересень', 'Жовтень', 'Листопад', 'Грудень'],
                dayOfWeekShort: ["Ндл", "Пнд", "Втр", "Срд", "Чтв", "Птн", "Сбт"],
                dayOfWeek: ["Неділя", "Понеділок", "Вівторок", "Середа", "Четвер", "П'ятниця", "Субота"]
            },
            en: { // English
                months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                dayOfWeekShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                dayOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
            },
            el: { // Ελληνικά
                months: ["Ιανουάριος", "Φεβρουάριος", "Μάρτιος", "Απρίλιος", "Μάιος", "Ιούνιος", "Ιούλιος", "Αύγουστος", "Σεπτέμβριος", "Οκτώβριος", "Νοέμβριος", "Δεκέμβριος"],
                dayOfWeekShort: ["Κυρ", "Δευ", "Τρι", "Τετ", "Πεμ", "Παρ", "Σαβ"],
                dayOfWeek: ["Κυριακή", "Δευτέρα", "Τρίτη", "Τετάρτη", "Πέμπτη", "Παρασκευή", "Σάββατο"]
            },
            de: { // German
                months: ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'],
                dayOfWeekShort: ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"],
                dayOfWeek: ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"]
            },
            nl: { // Dutch
                months: ["januari", "februari", "maart", "april", "mei", "juni", "juli", "augustus", "september", "oktober", "november", "december"],
                dayOfWeekShort: ["zo", "ma", "di", "wo", "do", "vr", "za"],
                dayOfWeek: ["zondag", "maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag"]
            },
            tr: { // Turkish
                months: ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"],
                dayOfWeekShort: ["Paz", "Pts", "Sal", "Çar", "Per", "Cum", "Cts"],
                dayOfWeek: ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"]
            },
            fr: { //French
                months: ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"],
                dayOfWeekShort: ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"],
                dayOfWeek: ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"]
            },
            es: { // Spanish
                months: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
                dayOfWeekShort: ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"],
                dayOfWeek: ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"]
            },
            th: { // Thai
                months: ['มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม', 'มิถุนายน', 'กรกฎาคม', 'สิงหาคม', 'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม'],
                dayOfWeekShort: ['อา.', 'จ.', 'อ.', 'พ.', 'พฤ.', 'ศ.', 'ส.'],
                dayOfWeek: ["อาทิตย์", "จันทร์", "อังคาร", "พุธ", "พฤหัส", "ศุกร์", "เสาร์", "อาทิตย์"]
            },
            pl: { // Polish
                months: ["styczeń", "luty", "marzec", "kwiecień", "maj", "czerwiec", "lipiec", "sierpień", "wrzesień", "październik", "listopad", "grudzień"],
                dayOfWeekShort: ["nd", "pn", "wt", "śr", "cz", "pt", "sb"],
                dayOfWeek: ["niedziela", "poniedziałek", "wtorek", "środa", "czwartek", "piątek", "sobota"]
            },
            pt: { // Portuguese
                months: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
                dayOfWeekShort: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"],
                dayOfWeek: ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"]
            },
            ch: { // Simplified Chinese
                months: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
                dayOfWeekShort: ["日", "一", "二", "三", "四", "五", "六"]
            },
            se: { // Swedish
                months: ["Januari", "Februari", "Mars", "April", "Maj", "Juni", "Juli", "Augusti", "September", "Oktober", "November", "December"],
                dayOfWeekShort: ["Sön", "Mån", "Tis", "Ons", "Tor", "Fre", "Lör"]
            },
            kr: { // Korean
                months: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
                dayOfWeekShort: ["일", "월", "화", "수", "목", "금", "토"],
                dayOfWeek: ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"]
            },
            it: { // Italian
                months: ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"],
                dayOfWeekShort: ["Dom", "Lun", "Mar", "Mer", "Gio", "Ven", "Sab"],
                dayOfWeek: ["Domenica", "Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato"]
            },
            da: { // Dansk
                months: ["January", "Februar", "Marts", "April", "Maj", "Juni", "July", "August", "September", "Oktober", "November", "December"],
                dayOfWeekShort: ["Søn", "Man", "Tir", "Ons", "Tor", "Fre", "Lør"],
                dayOfWeek: ["søndag", "mandag", "tirsdag", "onsdag", "torsdag", "fredag", "lørdag"]
            },
            no: { // Norwegian
                months: ["Januar", "Februar", "Mars", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Desember"],
                dayOfWeekShort: ["Søn", "Man", "Tir", "Ons", "Tor", "Fre", "Lør"],
                dayOfWeek: ['Søndag', 'Mandag', 'Tirsdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lørdag']
            },
            ja: { // Japanese
                months: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
                dayOfWeekShort: ["日", "月", "火", "水", "木", "金", "土"],
                dayOfWeek: ["日曜", "月曜", "火曜", "水曜", "木曜", "金曜", "土曜"]
            },
            vi: { // Vietnamese
                months: ["Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5", "Tháng 6", "Tháng 7", "Tháng 8", "Tháng 9", "Tháng 10", "Tháng 11", "Tháng 12"],
                dayOfWeekShort: ["CN", "T2", "T3", "T4", "T5", "T6", "T7"],
                dayOfWeek: ["Chủ nhật", "Thứ hai", "Thứ ba", "Thứ tư", "Thứ năm", "Thứ sáu", "Thứ bảy"]
            },
            sl: { // Slovenščina
                months: ["Januar", "Februar", "Marec", "April", "Maj", "Junij", "Julij", "Avgust", "September", "Oktober", "November", "December"],
                dayOfWeekShort: ["Ned", "Pon", "Tor", "Sre", "Čet", "Pet", "Sob"],
                dayOfWeek: ["Nedelja", "Ponedeljek", "Torek", "Sreda", "Četrtek", "Petek", "Sobota"]
            },
            cs: { // Čeština
                months: ["Leden", "Únor", "Březen", "Duben", "Květen", "Červen", "Červenec", "Srpen", "Září", "Říjen", "Listopad", "Prosinec"],
                dayOfWeekShort: ["Ne", "Po", "Út", "St", "Čt", "Pá", "So"]
            },
            hu: { // Hungarian
                months: ["Január", "Február", "Március", "Április", "Május", "Június", "Július", "Augusztus", "Szeptember", "Október", "November", "December"],
                dayOfWeekShort: ["Va", "Hé", "Ke", "Sze", "Cs", "Pé", "Szo"],
                dayOfWeek: ["vasárnap", "hétfő", "kedd", "szerda", "csütörtök", "péntek", "szombat"]
            },
            az: { //Azerbaijanian (Azeri)
                months: ["Yanvar", "Fevral", "Mart", "Aprel", "May", "Iyun", "Iyul", "Avqust", "Sentyabr", "Oktyabr", "Noyabr", "Dekabr"],
                dayOfWeekShort: ["B", "Be", "Ça", "Ç", "Ca", "C", "Ş"],
                dayOfWeek: ["Bazar", "Bazar ertəsi", "Çərşənbə axşamı", "Çərşənbə", "Cümə axşamı", "Cümə", "Şənbə"]
            },
            bs: { //Bosanski
                months: ["Januar", "Februar", "Mart", "April", "Maj", "Jun", "Jul", "Avgust", "Septembar", "Oktobar", "Novembar", "Decembar"],
                dayOfWeekShort: ["Ned", "Pon", "Uto", "Sri", "Čet", "Pet", "Sub"],
                dayOfWeek: ["Nedjelja", "Ponedjeljak", "Utorak", "Srijeda", "Četvrtak", "Petak", "Subota"]
            },
            ca: { //Català
                months: ["Gener", "Febrer", "Març", "Abril", "Maig", "Juny", "Juliol", "Agost", "Setembre", "Octubre", "Novembre", "Desembre"],
                dayOfWeekShort: ["Dg", "Dl", "Dt", "Dc", "Dj", "Dv", "Ds"],
                dayOfWeek: ["Diumenge", "Dilluns", "Dimarts", "Dimecres", "Dijous", "Divendres", "Dissabte"]
            },
            'en-GB': { //English (British)
                months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                dayOfWeekShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                dayOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
            },
            et: { //"Eesti"
                months: ["Jaanuar", "Veebruar", "Märts", "Aprill", "Mai", "Juuni", "Juuli", "August", "September", "Oktoober", "November", "Detsember"],
                dayOfWeekShort: ["P", "E", "T", "K", "N", "R", "L"],
                dayOfWeek: ["Pühapäev", "Esmaspäev", "Teisipäev", "Kolmapäev", "Neljapäev", "Reede", "Laupäev"]
            },
            eu: { //Euskara
                months: ["Urtarrila", "Otsaila", "Martxoa", "Apirila", "Maiatza", "Ekaina", "Uztaila", "Abuztua", "Iraila", "Urria", "Azaroa", "Abendua"],
                dayOfWeekShort: ["Ig.", "Al.", "Ar.", "Az.", "Og.", "Or.", "La."],
                dayOfWeek: ['Igandea', 'Astelehena', 'Asteartea', 'Asteazkena', 'Osteguna', 'Ostirala', 'Larunbata']
            },
            fi: { //Finnish (Suomi)
                months: ["Tammikuu", "Helmikuu", "Maaliskuu", "Huhtikuu", "Toukokuu", "Kesäkuu", "Heinäkuu", "Elokuu", "Syyskuu", "Lokakuu", "Marraskuu", "Joulukuu"],
                dayOfWeekShort: ["Su", "Ma", "Ti", "Ke", "To", "Pe", "La"],
                dayOfWeek: ["sunnuntai", "maanantai", "tiistai", "keskiviikko", "torstai", "perjantai", "lauantai"]
            },
            gl: { //Galego
                months: ["Xan", "Feb", "Maz", "Abr", "Mai", "Xun", "Xul", "Ago", "Set", "Out", "Nov", "Dec"],
                dayOfWeekShort: ["Dom", "Lun", "Mar", "Mer", "Xov", "Ven", "Sab"],
                dayOfWeek: ["Domingo", "Luns", "Martes", "Mércores", "Xoves", "Venres", "Sábado"]
            },
            hr: { //Hrvatski
                months: ["Siječanj", "Veljača", "Ožujak", "Travanj", "Svibanj", "Lipanj", "Srpanj", "Kolovoz", "Rujan", "Listopad", "Studeni", "Prosinac"],
                dayOfWeekShort: ["Ned", "Pon", "Uto", "Sri", "Čet", "Pet", "Sub"],
                dayOfWeek: ["Nedjelja", "Ponedjeljak", "Utorak", "Srijeda", "Četvrtak", "Petak", "Subota"]
            },
            ko: { //Korean (한국어)
                months: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
                dayOfWeekShort: ["일", "월", "화", "수", "목", "금", "토"],
                dayOfWeek: ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"]
            },
            lt: { //Lithuanian (lietuvių)
                months: ["Sausio", "Vasario", "Kovo", "Balandžio", "Gegužės", "Birželio", "Liepos", "Rugpjūčio", "Rugsėjo", "Spalio", "Lapkričio", "Gruodžio"],
                dayOfWeekShort: ["Sek", "Pir", "Ant", "Tre", "Ket", "Pen", "Šeš"],
                dayOfWeek: ["Sekmadienis", "Pirmadienis", "Antradienis", "Trečiadienis", "Ketvirtadienis", "Penktadienis", "Šeštadienis"]
            },
            lv: { //Latvian (Latviešu)
                months: ["Janvāris", "Februāris", "Marts", "Aprīlis ", "Maijs", "Jūnijs", "Jūlijs", "Augusts", "Septembris", "Oktobris", "Novembris", "Decembris"],
                dayOfWeekShort: ["Sv", "Pr", "Ot", "Tr", "Ct", "Pk", "St"],
                dayOfWeek: ["Svētdiena", "Pirmdiena", "Otrdiena", "Trešdiena", "Ceturtdiena", "Piektdiena", "Sestdiena"]
            },
            mk: { //Macedonian (Македонски)
                months: ["јануари", "февруари", "март", "април", "мај", "јуни", "јули", "август", "септември", "октомври", "ноември", "декември"],
                dayOfWeekShort: ["нед", "пон", "вто", "сре", "чет", "пет", "саб"],
                dayOfWeek: ["Недела", "Понеделник", "Вторник", "Среда", "Четврток", "Петок", "Сабота"]
            },
            mn: { //Mongolian (Монгол)
                months: ["1-р сар", "2-р сар", "3-р сар", "4-р сар", "5-р сар", "6-р сар", "7-р сар", "8-р сар", "9-р сар", "10-р сар", "11-р сар", "12-р сар"],
                dayOfWeekShort: ["Дав", "Мяг", "Лха", "Пүр", "Бсн", "Бям", "Ням"],
                dayOfWeek: ["Даваа", "Мягмар", "Лхагва", "Пүрэв", "Баасан", "Бямба", "Ням"]
            },
            'pt-BR': { //Português(Brasil)
                months: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
                dayOfWeekShort: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"],
                dayOfWeek: ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"]
            },
            sk: { //Slovenčina
                months: ["Január", "Február", "Marec", "Apríl", "Máj", "Jún", "Júl", "August", "September", "Október", "November", "December"],
                dayOfWeekShort: ["Ne", "Po", "Ut", "St", "Št", "Pi", "So"],
                dayOfWeek: ["Nedeľa", "Pondelok", "Utorok", "Streda", "Štvrtok", "Piatok", "Sobota"]
            },
            sq: { //Albanian (Shqip)
                months: ["Janar", "Shkurt", "Mars", "Prill", "Maj", "Qershor", "Korrik", "Gusht", "Shtator", "Tetor", "Nëntor", "Dhjetor"],
                dayOfWeekShort: ["Die", "Hën", "Mar", "Mër", "Enj", "Pre", "Shtu"],
                dayOfWeek: ["E Diel", "E Hënë", "E Martē", "E Mërkurë", "E Enjte", "E Premte", "E Shtunë"]
            },
            'sr-YU': { //Serbian (Srpski)
                months: ["Januar", "Februar", "Mart", "April", "Maj", "Jun", "Jul", "Avgust", "Septembar", "Oktobar", "Novembar", "Decembar"],
                dayOfWeekShort: ["Ned", "Pon", "Uto", "Sre", "čet", "Pet", "Sub"],
                dayOfWeek: ["Nedelja", "Ponedeljak", "Utorak", "Sreda", "Četvrtak", "Petak", "Subota"]
            },
            sr: { //Serbian Cyrillic (Српски)
                months: ["јануар", "фебруар", "март", "април", "мај", "јун", "јул", "август", "септембар", "октобар", "новембар", "децембар"],
                dayOfWeekShort: ["нед", "пон", "уто", "сре", "чет", "пет", "суб"],
                dayOfWeek: ["Недеља", "Понедељак", "Уторак", "Среда", "Четвртак", "Петак", "Субота"]
            },
            sv: { //Svenska
                months: ["Januari", "Februari", "Mars", "April", "Maj", "Juni", "Juli", "Augusti", "September", "Oktober", "November", "December"],
                dayOfWeekShort: ["Sön", "Mån", "Tis", "Ons", "Tor", "Fre", "Lör"],
                dayOfWeek: ["Söndag", "Måndag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "Lördag"]
            },
            'zh-TW': { //Traditional Chinese (繁體中文)
                months: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
                dayOfWeekShort: ["日", "一", "二", "三", "四", "五", "六"],
                dayOfWeek: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"]
            },
            zh: { //Simplified Chinese (简体中文)
                months: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
                dayOfWeekShort: ["日", "一", "二", "三", "四", "五", "六"],
                dayOfWeek: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"]
            },
            he: { //Hebrew (עברית)
                months: ['ינואר', 'פברואר', 'מרץ', 'אפריל', 'מאי', 'יוני', 'יולי', 'אוגוסט', 'ספטמבר', 'אוקטובר', 'נובמבר', 'דצמבר'],
                dayOfWeekShort: ['א\'', 'ב\'', 'ג\'', 'ד\'', 'ה\'', 'ו\'', 'שבת'],
                dayOfWeek: ["ראשון", "שני", "שלישי", "רביעי", "חמישי", "שישי", "שבת", "ראשון"]
            },
            hy: { // Armenian
                months: ["Հունվար", "Փետրվար", "Մարտ", "Ապրիլ", "Մայիս", "Հունիս", "Հուլիս", "Օգոստոս", "Սեպտեմբեր", "Հոկտեմբեր", "Նոյեմբեր", "Դեկտեմբեր"],
                dayOfWeekShort: ["Կի", "Երկ", "Երք", "Չոր", "Հնգ", "Ուրբ", "Շբթ"],
                dayOfWeek: ["Կիրակի", "Երկուշաբթի", "Երեքշաբթի", "Չորեքշաբթի", "Հինգշաբթի", "Ուրբաթ", "Շաբաթ"]
            },
            kg: { // Kyrgyz
                months: ['Үчтүн айы', 'Бирдин айы', 'Жалган Куран', 'Чын Куран', 'Бугу', 'Кулжа', 'Теке', 'Баш Оона', 'Аяк Оона', 'Тогуздун айы', 'Жетинин айы', 'Бештин айы'],
                dayOfWeekShort: ["Жек", "Дүй", "Шей", "Шар", "Бей", "Жум", "Ише"],
                dayOfWeek: ["Жекшемб", "Дүйшөмб", "Шейшемб", "Шаршемб", "Бейшемби", "Жума", "Ишенб"]
            },
            rm: { // Romansh
                months: ["Schaner", "Favrer", "Mars", "Avrigl", "Matg", "Zercladur", "Fanadur", "Avust", "Settember", "October", "November", "December"],
                dayOfWeekShort: ["Du", "Gli", "Ma", "Me", "Gie", "Ve", "So"],
                dayOfWeek: ["Dumengia", "Glindesdi", "Mardi", "Mesemna", "Gievgia", "Venderdi", "Sonda"]
            },
            ka: { // Georgian
                months: ['იანვარი', 'თებერვალი', 'მარტი', 'აპრილი', 'მაისი', 'ივნისი', 'ივლისი', 'აგვისტო', 'სექტემბერი', 'ოქტომბერი', 'ნოემბერი', 'დეკემბერი'],
                dayOfWeekShort: ["კვ", "ორშ", "სამშ", "ოთხ", "ხუთ", "პარ", "შაბ"],
                dayOfWeek: ["კვირა", "ორშაბათი", "სამშაბათი", "ოთხშაბათი", "ხუთშაბათი", "პარასკევი", "შაბათი"]
            }
        },
        value: '',
        rtl: false,

        format: 'Y/m/d H:i',
        formatTime: 'H:i',
        formatDate: 'Y/m/d',

        startDate: false, // new Date(), '1986/12/08', '-1970/01/05','-1970/01/05',
        step: 60,
        monthChangeSpinner: true,

        closeOnDateSelect: false,
        closeOnTimeSelect: true,
        closeOnWithoutClick: true,
        closeOnInputClick: true,

        timepicker: true,
        datepicker: true,
        weeks: false,

        defaultTime: false, // use formatTime format (ex. '10:00' for formatTime:	'H:i')
        defaultDate: false, // use formatDate format (ex new Date() or '1986/12/08' or '-1970/01/05' or '-1970/01/05')

        minDate: false,
        maxDate: false,
        minTime: false,
        maxTime: false,
        disabledMinTime: false,
        disabledMaxTime: false,

        allowTimes: [],
        opened: false,
        initTime: true,
        inline: false,
        theme: '',

        onSelectDate: function onSelectDate() {},
        onSelectTime: function onSelectTime() {},
        onChangeMonth: function onChangeMonth() {},
        onGetWeekOfYear: function onGetWeekOfYear() {},
        onChangeYear: function onChangeYear() {},
        onChangeDateTime: function onChangeDateTime() {},
        onShow: function onShow() {},
        onClose: function onClose() {},
        onGenerate: function onGenerate() {},

        withoutCopyright: true,
        inverseButton: false,
        hours12: false,
        minHours: 0,
        next: 'xdsoft_next',
        prev: 'xdsoft_prev',
        dayOfWeekStart: 0,
        parentID: 'body',
        timeHeightInTimePicker: 25,
        timepickerScrollbar: true,
        todayButton: true,
        prevButton: true,
        nextButton: true,
        defaultSelect: true,

        scrollMonth: true,
        scrollTime: true,
        scrollInput: true,

        lazyInit: false,
        mask: false,
        validateOnBlur: true,
        allowBlank: true,
        yearStart: 1950,
        yearEnd: 2050,
        monthStart: 0,
        monthEnd: 11,
        style: '',
        id: '',
        fixed: false,
        roundTime: 'round', // ceil, floor
        className: '',
        weekends: [],
        highlightedDates: [],
        highlightedPeriods: [],
        allowDates: [],
        allowDateRe: null,
        disabledDates: [],
        disabledWeekDays: [],
        yearOffset: 0,
        beforeShowDay: null,

        enterLikeTab: true,
        showApplyButton: false
    };

    var dateHelper = null,
        globalLocaleDefault = 'en',
        globalLocale = 'en';

    var dateFormatterOptionsDefault = {
        meridiem: ['AM', 'PM']
    };

    var initDateFormatter = function initDateFormatter() {
        var locale = default_options.i18n[globalLocale],
            opts = {
            days: locale.dayOfWeek,
            daysShort: locale.dayOfWeekShort,
            months: locale.months,
            monthsShort: $.map(locale.months, function (n) {
                return n.substring(0, 3);
            })
        };

        dateHelper = new DateFormatter({
            dateSettings: $.extend({}, dateFormatterOptionsDefault, opts)
        });
    };

    // for locale settings
    $.datetimepicker = {
        setLocale: function setLocale(locale) {
            var newLocale = default_options.i18n[locale] ? locale : globalLocaleDefault;
            if (globalLocale != newLocale) {
                globalLocale = newLocale;
                // reinit date formatter
                initDateFormatter();
            }
        },
        setDateFormatter: function setDateFormatter(dateFormatter) {
            dateHelper = dateFormatter;
        },
        RFC_2822: 'D, d M Y H:i:s O',
        ATOM: 'Y-m-d\TH:i:sP',
        ISO_8601: 'Y-m-d\TH:i:sO',
        RFC_822: 'D, d M y H:i:s O',
        RFC_850: 'l, d-M-y H:i:s T',
        RFC_1036: 'D, d M y H:i:s O',
        RFC_1123: 'D, d M Y H:i:s O',
        RSS: 'D, d M Y H:i:s O',
        W3C: 'Y-m-d\TH:i:sP'
    };

    $.datetimepicker.setLocale('ch');
    // first init date formatter
    initDateFormatter();

    // fix for ie8
    if (!window.getComputedStyle) {
        window.getComputedStyle = function (el, pseudo) {
            this.el = el;
            this.getPropertyValue = function (prop) {
                var re = /(\-([a-z]){1})/g;
                if (prop === 'float') {
                    prop = 'styleFloat';
                }
                if (re.test(prop)) {
                    prop = prop.replace(re, function (a, b, c) {
                        return c.toUpperCase();
                    });
                }
                return el.currentStyle[prop] || null;
            };
            return this;
        };
    }
    if (!Array.prototype.indexOf) {
        Array.prototype.indexOf = function (obj, start) {
            var i, j;
            for (i = start || 0, j = this.length; i < j; i += 1) {
                if (this[i] === obj) {
                    return i;
                }
            }
            return -1;
        };
    }
    Date.prototype.countDaysInMonth = function () {
        return new Date(this.getFullYear(), this.getMonth() + 1, 0).getDate();
    };
    $.fn.xdsoftScroller = function (percent) {
        return this.each(function () {
            var timeboxparent = $(this),
                pointerEventToXY = function pointerEventToXY(e) {
                var out = { x: 0, y: 0 },
                    touch;
                if (e.type === 'touchstart' || e.type === 'touchmove' || e.type === 'touchend' || e.type === 'touchcancel') {
                    touch = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
                    out.x = touch.clientX;
                    out.y = touch.clientY;
                } else if (e.type === 'mousedown' || e.type === 'mouseup' || e.type === 'mousemove' || e.type === 'mouseover' || e.type === 'mouseout' || e.type === 'mouseenter' || e.type === 'mouseleave') {
                    out.x = e.clientX;
                    out.y = e.clientY;
                }
                return out;
            },
                timebox,
                parentHeight,
                height,
                scrollbar,
                scroller,
                maximumOffset = 100,
                start = false,
                startY = 0,
                startTop = 0,
                h1 = 0,
                touchStart = false,
                startTopScroll = 0,
                calcOffset = function calcOffset() {};
            if (percent === 'hide') {
                timeboxparent.find('.xdsoft_scrollbar').hide();
                return;
            }
            if (!$(this).hasClass('xdsoft_scroller_box')) {
                timebox = timeboxparent.children().eq(0);
                parentHeight = timeboxparent[0].clientHeight;
                height = timebox[0].offsetHeight;
                scrollbar = $('<div class="xdsoft_scrollbar"></div>');
                scroller = $('<div class="xdsoft_scroller"></div>');
                scrollbar.append(scroller);

                timeboxparent.addClass('xdsoft_scroller_box').append(scrollbar);
                calcOffset = function calcOffset(event) {
                    var offset = pointerEventToXY(event).y - startY + startTopScroll;
                    if (offset < 0) {
                        offset = 0;
                    }
                    if (offset + scroller[0].offsetHeight > h1) {
                        offset = h1 - scroller[0].offsetHeight;
                    }
                    timeboxparent.trigger('scroll_element.xdsoft_scroller', [maximumOffset ? offset / maximumOffset : 0]);
                };

                scroller.on('touchstart.xdsoft_scroller mousedown.xdsoft_scroller', function (event) {
                    if (!parentHeight) {
                        timeboxparent.trigger('resize_scroll.xdsoft_scroller', [percent]);
                    }

                    startY = pointerEventToXY(event).y;
                    startTopScroll = parseInt(scroller.css('margin-top'), 10);
                    h1 = scrollbar[0].offsetHeight;

                    if (event.type === 'mousedown' || event.type === 'touchstart') {
                        if (document) {
                            $(document.body).addClass('xdsoft_noselect');
                        }
                        $([document.body, window]).on('touchend mouseup.xdsoft_scroller', function arguments_callee() {
                            $([document.body, window]).off('touchend mouseup.xdsoft_scroller', arguments_callee).off('mousemove.xdsoft_scroller', calcOffset).removeClass('xdsoft_noselect');
                        });
                        $(document.body).on('mousemove.xdsoft_scroller', calcOffset);
                    } else {
                        touchStart = true;
                        event.stopPropagation();
                        event.preventDefault();
                    }
                }).on('touchmove', function (event) {
                    if (touchStart) {
                        event.preventDefault();
                        calcOffset(event);
                    }
                }).on('touchend touchcancel', function () {
                    touchStart = false;
                    startTopScroll = 0;
                });

                timeboxparent.on('scroll_element.xdsoft_scroller', function (event, percentage) {
                    if (!parentHeight) {
                        timeboxparent.trigger('resize_scroll.xdsoft_scroller', [percentage, true]);
                    }
                    percentage = percentage > 1 ? 1 : percentage < 0 || isNaN(percentage) ? 0 : percentage;

                    scroller.css('margin-top', maximumOffset * percentage);

                    setTimeout(function () {
                        timebox.css('marginTop', -parseInt((timebox[0].offsetHeight - parentHeight) * percentage, 10));
                    }, 10);
                }).on('resize_scroll.xdsoft_scroller', function (event, percentage, noTriggerScroll) {
                    var percent, sh;
                    parentHeight = timeboxparent[0].clientHeight;
                    height = timebox[0].offsetHeight;
                    percent = parentHeight / height;
                    sh = percent * scrollbar[0].offsetHeight;
                    if (percent > 1) {
                        scroller.hide();
                    } else {
                        scroller.show();
                        scroller.css('height', parseInt(sh > 10 ? sh : 10, 10));
                        maximumOffset = scrollbar[0].offsetHeight - scroller[0].offsetHeight;
                        if (noTriggerScroll !== true) {
                            timeboxparent.trigger('scroll_element.xdsoft_scroller', [percentage || Math.abs(parseInt(timebox.css('marginTop'), 10)) / (height - parentHeight)]);
                        }
                    }
                });

                timeboxparent.on('mousewheel', function (event) {
                    var top = Math.abs(parseInt(timebox.css('marginTop'), 10));

                    top = top - event.deltaY * 20;
                    if (top < 0) {
                        top = 0;
                    }

                    timeboxparent.trigger('scroll_element.xdsoft_scroller', [top / (height - parentHeight)]);
                    event.stopPropagation();
                    return false;
                });

                timeboxparent.on('touchstart', function (event) {
                    start = pointerEventToXY(event);
                    startTop = Math.abs(parseInt(timebox.css('marginTop'), 10));
                });

                timeboxparent.on('touchmove', function (event) {
                    if (start) {
                        event.preventDefault();
                        var coord = pointerEventToXY(event);
                        timeboxparent.trigger('scroll_element.xdsoft_scroller', [(startTop - (coord.y - start.y)) / (height - parentHeight)]);
                    }
                });

                timeboxparent.on('touchend touchcancel', function () {
                    start = false;
                    startTop = 0;
                });
            }
            timeboxparent.trigger('resize_scroll.xdsoft_scroller', [percent]);
        });
    };

    $.fn.datetimepicker = function (opt, opt2) {
        var result = this,
            KEY0 = 48,
            KEY9 = 57,
            _KEY0 = 96,
            _KEY9 = 105,
            CTRLKEY = 17,
            DEL = 46,
            ENTER = 13,
            ESC = 27,
            BACKSPACE = 8,
            ARROWLEFT = 37,
            ARROWUP = 38,
            ARROWRIGHT = 39,
            ARROWDOWN = 40,
            TAB = 9,
            F5 = 116,
            AKEY = 65,
            CKEY = 67,
            VKEY = 86,
            ZKEY = 90,
            YKEY = 89,
            ctrlDown = false,
            options = $.isPlainObject(opt) || !opt ? $.extend(true, {}, default_options, opt) : $.extend(true, {}, default_options),
            lazyInitTimer = 0,
            createDateTimePicker,
            destroyDateTimePicker,
            lazyInit = function lazyInit(input) {
            input.on('open.xdsoft focusin.xdsoft mousedown.xdsoft touchstart', function initOnActionCallback() {
                if (input.is(':disabled') || input.data('xdsoft_datetimepicker')) {
                    return;
                }
                clearTimeout(lazyInitTimer);
                lazyInitTimer = setTimeout(function () {

                    if (!input.data('xdsoft_datetimepicker')) {
                        createDateTimePicker(input);
                    }
                    input.off('open.xdsoft focusin.xdsoft mousedown.xdsoft touchstart', initOnActionCallback).trigger('open.xdsoft');
                }, 100);
            });
        };

        createDateTimePicker = function createDateTimePicker(input) {
            var datetimepicker = $('<div class="xdsoft_datetimepicker xdsoft_noselect"></div>'),
                xdsoft_copyright = $('<div class="xdsoft_copyright"><a target="_blank" href="http://xdsoft.net/jqplugins/datetimepicker/">xdsoft.net</a></div>'),
                datepicker = $('<div class="xdsoft_datepicker active"></div>'),
                month_picker = $('<div class="xdsoft_monthpicker"><button type="button" class="xdsoft_prev"></button><button type="button" class="xdsoft_today_button"></button>' + '<div class="xdsoft_label xdsoft_month"><span></span><i></i></div>' + '<div class="xdsoft_label xdsoft_year"><span></span><i></i></div>' + '<button type="button" class="xdsoft_next"></button></div>'),
                calendar = $('<div class="xdsoft_calendar"></div>'),
                timepicker = $('<div class="xdsoft_timepicker active"><button type="button" class="xdsoft_prev"></button><div class="xdsoft_time_box"></div><button type="button" class="xdsoft_next"></button></div>'),
                timeboxparent = timepicker.find('.xdsoft_time_box').eq(0),
                timebox = $('<div class="xdsoft_time_variant"></div>'),
                applyButton = $('<button type="button" class="xdsoft_save_selected blue-gradient-button">Save Selected</button>'),
                monthselect = $('<div class="xdsoft_select xdsoft_monthselect"><div></div></div>'),
                yearselect = $('<div class="xdsoft_select xdsoft_yearselect"><div></div></div>'),
                triggerAfterOpen = false,
                XDSoft_datetime,
                xchangeTimer,
                timerclick,
                current_time_index,
                setPos,
                timer = 0,
                _xdsoft_datetime,
                forEachAncestorOf,
                throttle;

            if (options.id) {
                datetimepicker.attr('id', options.id);
            }
            if (options.style) {
                datetimepicker.attr('style', options.style);
            }
            if (options.weeks) {
                datetimepicker.addClass('xdsoft_showweeks');
            }
            if (options.rtl) {
                datetimepicker.addClass('xdsoft_rtl');
            }

            datetimepicker.addClass('xdsoft_' + options.theme);
            datetimepicker.addClass(options.className);

            month_picker.find('.xdsoft_month span').after(monthselect);
            month_picker.find('.xdsoft_year span').after(yearselect);

            month_picker.find('.xdsoft_month,.xdsoft_year').on('touchstart mousedown.xdsoft', function (event) {
                var select = $(this).find('.xdsoft_select').eq(0),
                    val = 0,
                    top = 0,
                    visible = select.is(':visible'),
                    items,
                    i;

                month_picker.find('.xdsoft_select').hide();
                if (_xdsoft_datetime.currentTime) {
                    val = _xdsoft_datetime.currentTime[$(this).hasClass('xdsoft_month') ? 'getMonth' : 'getFullYear']();
                }

                select[visible ? 'hide' : 'show']();
                for (items = select.find('div.xdsoft_option'), i = 0; i < items.length; i += 1) {
                    if (items.eq(i).data('value') === val) {
                        break;
                    } else {
                        top += items[0].offsetHeight;
                    }
                }

                select.xdsoftScroller(top / (select.children()[0].offsetHeight - select[0].clientHeight));
                event.stopPropagation();
                return false;
            });

            month_picker.find('.xdsoft_select').xdsoftScroller().on('touchstart mousedown.xdsoft', function (event) {
                event.stopPropagation();
                event.preventDefault();
            }).on('touchstart mousedown.xdsoft', '.xdsoft_option', function () {
                if (_xdsoft_datetime.currentTime === undefined || _xdsoft_datetime.currentTime === null) {
                    _xdsoft_datetime.currentTime = _xdsoft_datetime.now();
                }

                var year = _xdsoft_datetime.currentTime.getFullYear();
                if (_xdsoft_datetime && _xdsoft_datetime.currentTime) {
                    _xdsoft_datetime.currentTime[$(this).parent().parent().hasClass('xdsoft_monthselect') ? 'setMonth' : 'setFullYear']($(this).data('value'));
                }

                $(this).parent().parent().hide();

                datetimepicker.trigger('xchange.xdsoft');
                if (options.onChangeMonth && $.isFunction(options.onChangeMonth)) {
                    options.onChangeMonth.call(datetimepicker, _xdsoft_datetime.currentTime, datetimepicker.data('input'));
                }

                if (year !== _xdsoft_datetime.currentTime.getFullYear() && $.isFunction(options.onChangeYear)) {
                    options.onChangeYear.call(datetimepicker, _xdsoft_datetime.currentTime, datetimepicker.data('input'));
                }
            });

            datetimepicker.getValue = function () {
                return _xdsoft_datetime.getCurrentTime();
            };

            datetimepicker.setOptions = function (_options) {
                var highlightedDates = {};

                options = $.extend(true, {}, options, _options);

                if (_options.allowTimes && $.isArray(_options.allowTimes) && _options.allowTimes.length) {
                    options.allowTimes = $.extend(true, [], _options.allowTimes);
                }

                if (_options.weekends && $.isArray(_options.weekends) && _options.weekends.length) {
                    options.weekends = $.extend(true, [], _options.weekends);
                }

                if (_options.allowDates && $.isArray(_options.allowDates) && _options.allowDates.length) {
                    options.allowDates = $.extend(true, [], _options.allowDates);
                }

                if (_options.allowDateRe && Object.prototype.toString.call(_options.allowDateRe) === "[object String]") {
                    options.allowDateRe = new RegExp(_options.allowDateRe);
                }

                if (_options.highlightedDates && $.isArray(_options.highlightedDates) && _options.highlightedDates.length) {
                    $.each(_options.highlightedDates, function (index, value) {
                        var splitData = $.map(value.split(','), $.trim),
                            exDesc,
                            hDate = new HighlightedDate(dateHelper.parseDate(splitData[0], options.formatDate), splitData[1], splitData[2]),
                            // date, desc, style
                        keyDate = dateHelper.formatDate(hDate.date, options.formatDate);
                        if (highlightedDates[keyDate] !== undefined) {
                            exDesc = highlightedDates[keyDate].desc;
                            if (exDesc && exDesc.length && hDate.desc && hDate.desc.length) {
                                highlightedDates[keyDate].desc = exDesc + "\n" + hDate.desc;
                            }
                        } else {
                            highlightedDates[keyDate] = hDate;
                        }
                    });

                    options.highlightedDates = $.extend(true, [], highlightedDates);
                }

                if (_options.highlightedPeriods && $.isArray(_options.highlightedPeriods) && _options.highlightedPeriods.length) {
                    highlightedDates = $.extend(true, [], options.highlightedDates);
                    $.each(_options.highlightedPeriods, function (index, value) {
                        var dateTest, // start date
                        dateEnd, desc, hDate, keyDate, exDesc, style;
                        if ($.isArray(value)) {
                            dateTest = value[0];
                            dateEnd = value[1];
                            desc = value[2];
                            style = value[3];
                        } else {
                            var splitData = $.map(value.split(','), $.trim);
                            dateTest = dateHelper.parseDate(splitData[0], options.formatDate);
                            dateEnd = dateHelper.parseDate(splitData[1], options.formatDate);
                            desc = splitData[2];
                            style = splitData[3];
                        }

                        while (dateTest <= dateEnd) {
                            hDate = new HighlightedDate(dateTest, desc, style);
                            keyDate = dateHelper.formatDate(dateTest, options.formatDate);
                            dateTest.setDate(dateTest.getDate() + 1);
                            if (highlightedDates[keyDate] !== undefined) {
                                exDesc = highlightedDates[keyDate].desc;
                                if (exDesc && exDesc.length && hDate.desc && hDate.desc.length) {
                                    highlightedDates[keyDate].desc = exDesc + "\n" + hDate.desc;
                                }
                            } else {
                                highlightedDates[keyDate] = hDate;
                            }
                        }
                    });

                    options.highlightedDates = $.extend(true, [], highlightedDates);
                }

                if (_options.disabledDates && $.isArray(_options.disabledDates) && _options.disabledDates.length) {
                    options.disabledDates = $.extend(true, [], _options.disabledDates);
                }

                if (_options.disabledWeekDays && $.isArray(_options.disabledWeekDays) && _options.disabledWeekDays.length) {
                    options.disabledWeekDays = $.extend(true, [], _options.disabledWeekDays);
                }

                if ((options.open || options.opened) && !options.inline) {
                    input.trigger('open.xdsoft');
                }

                if (options.inline) {
                    triggerAfterOpen = true;
                    datetimepicker.addClass('xdsoft_inline');
                    input.after(datetimepicker).hide();
                }

                if (options.inverseButton) {
                    options.next = 'xdsoft_prev';
                    options.prev = 'xdsoft_next';
                }

                if (options.datepicker) {
                    datepicker.addClass('active');
                } else {
                    datepicker.removeClass('active');
                }

                if (options.timepicker) {
                    timepicker.addClass('active');
                } else {
                    timepicker.removeClass('active');
                }

                if (options.value) {
                    _xdsoft_datetime.setCurrentTime(options.value);
                    if (input && input.val) {
                        input.val(_xdsoft_datetime.str);
                    }
                }

                if (isNaN(options.dayOfWeekStart)) {
                    options.dayOfWeekStart = 0;
                } else {
                    options.dayOfWeekStart = parseInt(options.dayOfWeekStart, 10) % 7;
                }

                if (!options.timepickerScrollbar) {
                    timeboxparent.xdsoftScroller('hide');
                }

                if (options.minDate && /^[\+\-](.*)$/.test(options.minDate)) {
                    options.minDate = dateHelper.formatDate(_xdsoft_datetime.strToDateTime(options.minDate), options.formatDate);
                }

                if (options.maxDate && /^[\+\-](.*)$/.test(options.maxDate)) {
                    options.maxDate = dateHelper.formatDate(_xdsoft_datetime.strToDateTime(options.maxDate), options.formatDate);
                }

                applyButton.toggle(options.showApplyButton);

                month_picker.find('.xdsoft_today_button').css('visibility', !options.todayButton ? 'hidden' : 'visible');

                month_picker.find('.' + options.prev).css('visibility', !options.prevButton ? 'hidden' : 'visible');

                month_picker.find('.' + options.next).css('visibility', !options.nextButton ? 'hidden' : 'visible');

                setMask(options);

                if (options.validateOnBlur) {
                    input.off('blur.xdsoft').on('blur.xdsoft', function () {
                        if (options.allowBlank && (!$.trim($(this).val()).length || typeof options.mask == "string" && $.trim($(this).val()) === options.mask.replace(/[0-9]/g, '_'))) {
                            $(this).val(null);
                            datetimepicker.data('xdsoft_datetime').empty();
                        } else {
                            var d = dateHelper.parseDate($(this).val(), options.format);
                            if (d) {
                                // parseDate() may skip some invalid parts like date or time, so make it clear for user: show parsed date/time
                                $(this).val(dateHelper.formatDate(d, options.format));
                            } else {
                                var splittedHours = +[$(this).val()[0], $(this).val()[1]].join(''),
                                    splittedMinutes = +[$(this).val()[2], $(this).val()[3]].join('');

                                // parse the numbers as 0312 => 03:12
                                if (!options.datepicker && options.timepicker && splittedHours >= 0 && splittedHours < 24 && splittedMinutes >= 0 && splittedMinutes < 60) {
                                    $(this).val([splittedHours, splittedMinutes].map(function (item) {
                                        return item > 9 ? item : '0' + item;
                                    }).join(':'));
                                } else {
                                    $(this).val(dateHelper.formatDate(_xdsoft_datetime.now(), options.format));
                                }
                            }
                            datetimepicker.data('xdsoft_datetime').setCurrentTime($(this).val());
                        }

                        datetimepicker.trigger('changedatetime.xdsoft');
                        datetimepicker.trigger('close.xdsoft');
                    });
                }
                options.dayOfWeekStartPrev = options.dayOfWeekStart === 0 ? 6 : options.dayOfWeekStart - 1;

                datetimepicker.trigger('xchange.xdsoft').trigger('afterOpen.xdsoft');
            };

            datetimepicker.data('options', options).on('touchstart mousedown.xdsoft', function (event) {
                event.stopPropagation();
                event.preventDefault();
                yearselect.hide();
                monthselect.hide();
                return false;
            });

            //scroll_element = timepicker.find('.xdsoft_time_box');
            timeboxparent.append(timebox);
            timeboxparent.xdsoftScroller();

            datetimepicker.on('afterOpen.xdsoft', function () {
                timeboxparent.xdsoftScroller();
            });

            datetimepicker.append(datepicker).append(timepicker);

            if (options.withoutCopyright !== true) {
                datetimepicker.append(xdsoft_copyright);
            }

            datepicker.append(month_picker).append(calendar).append(applyButton);

            $(options.parentID).append(datetimepicker);

            XDSoft_datetime = function XDSoft_datetime() {
                var _this = this;
                _this.now = function (norecursion) {
                    var d = new Date(),
                        date,
                        time;

                    if (!norecursion && options.defaultDate) {
                        date = _this.strToDateTime(options.defaultDate);
                        d.setFullYear(date.getFullYear());
                        d.setMonth(date.getMonth());
                        d.setDate(date.getDate());
                    }

                    if (options.yearOffset) {
                        d.setFullYear(d.getFullYear() + options.yearOffset);
                    }

                    if (!norecursion && options.defaultTime) {
                        time = _this.strtotime(options.defaultTime);
                        d.setHours(time.getHours());
                        d.setMinutes(time.getMinutes());
                    }
                    return d;
                };

                _this.isValidDate = function (d) {
                    if (Object.prototype.toString.call(d) !== "[object Date]") {
                        return false;
                    }
                    return !isNaN(d.getTime());
                };

                _this.setCurrentTime = function (dTime, requireValidDate) {
                    if (typeof dTime === 'string') {
                        _this.currentTime = _this.strToDateTime(dTime);
                    } else if (_this.isValidDate(dTime)) {
                        _this.currentTime = dTime;
                    } else if (!dTime && !requireValidDate && options.allowBlank) {
                        _this.currentTime = null;
                    } else {
                        _this.currentTime = _this.now();
                    }

                    datetimepicker.trigger('xchange.xdsoft');
                };

                _this.empty = function () {
                    _this.currentTime = null;
                };

                _this.getCurrentTime = function (dTime) {
                    return _this.currentTime;
                };

                _this.nextMonth = function () {

                    if (_this.currentTime === undefined || _this.currentTime === null) {
                        _this.currentTime = _this.now();
                    }

                    var month = _this.currentTime.getMonth() + 1,
                        year;
                    if (month === 12) {
                        _this.currentTime.setFullYear(_this.currentTime.getFullYear() + 1);
                        month = 0;
                    }

                    year = _this.currentTime.getFullYear();

                    _this.currentTime.setDate(Math.min(new Date(_this.currentTime.getFullYear(), month + 1, 0).getDate(), _this.currentTime.getDate()));
                    _this.currentTime.setMonth(month);

                    if (options.onChangeMonth && $.isFunction(options.onChangeMonth)) {
                        options.onChangeMonth.call(datetimepicker, _xdsoft_datetime.currentTime, datetimepicker.data('input'));
                    }

                    if (year !== _this.currentTime.getFullYear() && $.isFunction(options.onChangeYear)) {
                        options.onChangeYear.call(datetimepicker, _xdsoft_datetime.currentTime, datetimepicker.data('input'));
                    }

                    datetimepicker.trigger('xchange.xdsoft');
                    return month;
                };

                _this.prevMonth = function () {

                    if (_this.currentTime === undefined || _this.currentTime === null) {
                        _this.currentTime = _this.now();
                    }

                    var month = _this.currentTime.getMonth() - 1;
                    if (month === -1) {
                        _this.currentTime.setFullYear(_this.currentTime.getFullYear() - 1);
                        month = 11;
                    }
                    _this.currentTime.setDate(Math.min(new Date(_this.currentTime.getFullYear(), month + 1, 0).getDate(), _this.currentTime.getDate()));
                    _this.currentTime.setMonth(month);
                    if (options.onChangeMonth && $.isFunction(options.onChangeMonth)) {
                        options.onChangeMonth.call(datetimepicker, _xdsoft_datetime.currentTime, datetimepicker.data('input'));
                    }
                    datetimepicker.trigger('xchange.xdsoft');
                    return month;
                };

                _this.getWeekOfYear = function (datetime) {
                    if (options.onGetWeekOfYear && $.isFunction(options.onGetWeekOfYear)) {
                        var week = options.onGetWeekOfYear.call(datetimepicker, datetime);
                        if (typeof week !== 'undefined') {
                            return week;
                        }
                    }
                    var onejan = new Date(datetime.getFullYear(), 0, 1);
                    //First week of the year is th one with the first Thursday according to ISO8601
                    if (onejan.getDay() != 4) onejan.setMonth(0, 1 + (4 - onejan.getDay() + 7) % 7);
                    return Math.ceil(((datetime - onejan) / 86400000 + onejan.getDay() + 1) / 7);
                };

                _this.strToDateTime = function (sDateTime) {
                    var tmpDate = [],
                        timeOffset,
                        currentTime;

                    if (sDateTime && sDateTime instanceof Date && _this.isValidDate(sDateTime)) {
                        return sDateTime;
                    }

                    tmpDate = /^(\+|\-)(.*)$/.exec(sDateTime);
                    if (tmpDate) {
                        tmpDate[2] = dateHelper.parseDate(tmpDate[2], options.formatDate);
                    }
                    if (tmpDate && tmpDate[2]) {
                        timeOffset = tmpDate[2].getTime() - tmpDate[2].getTimezoneOffset() * 60000;
                        currentTime = new Date(_this.now(true).getTime() + parseInt(tmpDate[1] + '1', 10) * timeOffset);
                    } else {
                        currentTime = sDateTime ? dateHelper.parseDate(sDateTime, options.format) : _this.now();
                    }

                    if (!_this.isValidDate(currentTime)) {
                        currentTime = _this.now();
                    }

                    return currentTime;
                };

                _this.strToDate = function (sDate) {
                    if (sDate && sDate instanceof Date && _this.isValidDate(sDate)) {
                        return sDate;
                    }

                    var currentTime = sDate ? dateHelper.parseDate(sDate, options.formatDate) : _this.now(true);
                    if (!_this.isValidDate(currentTime)) {
                        currentTime = _this.now(true);
                    }
                    return currentTime;
                };

                _this.strtotime = function (sTime) {
                    if (sTime && sTime instanceof Date && _this.isValidDate(sTime)) {
                        return sTime;
                    }
                    var currentTime = sTime ? dateHelper.parseDate(sTime, options.formatTime) : _this.now(true);
                    if (!_this.isValidDate(currentTime)) {
                        currentTime = _this.now(true);
                    }
                    return currentTime;
                };

                _this.str = function () {
                    return dateHelper.formatDate(_this.currentTime, options.format);
                };
                _this.currentTime = this.now();
            };

            _xdsoft_datetime = new XDSoft_datetime();

            applyButton.on('touchend click', function (e) {
                //pathbrite
                e.preventDefault();
                datetimepicker.data('changed', true);
                _xdsoft_datetime.setCurrentTime(getCurrentValue());
                input.val(_xdsoft_datetime.str());
                datetimepicker.trigger('close.xdsoft');
            });
            month_picker.find('.xdsoft_today_button').on('touchend mousedown.xdsoft', function () {
                datetimepicker.data('changed', true);
                _xdsoft_datetime.setCurrentTime(0, true);
                datetimepicker.trigger('afterOpen.xdsoft');
            }).on('dblclick.xdsoft', function () {
                var currentDate = _xdsoft_datetime.getCurrentTime(),
                    minDate,
                    maxDate;
                currentDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate());
                minDate = _xdsoft_datetime.strToDate(options.minDate);
                minDate = new Date(minDate.getFullYear(), minDate.getMonth(), minDate.getDate());
                if (currentDate < minDate) {
                    return;
                }
                maxDate = _xdsoft_datetime.strToDate(options.maxDate);
                maxDate = new Date(maxDate.getFullYear(), maxDate.getMonth(), maxDate.getDate());
                if (currentDate > maxDate) {
                    return;
                }
                input.val(_xdsoft_datetime.str());
                input.trigger('change');
                datetimepicker.trigger('close.xdsoft');
            });
            month_picker.find('.xdsoft_prev,.xdsoft_next').on('touchend mousedown.xdsoft', function () {
                var $this = $(this),
                    timer = 0,
                    stop = false;

                (function arguments_callee1(v) {
                    if ($this.hasClass(options.next)) {
                        _xdsoft_datetime.nextMonth();
                    } else if ($this.hasClass(options.prev)) {
                        _xdsoft_datetime.prevMonth();
                    }
                    if (options.monthChangeSpinner) {
                        if (!stop) {
                            timer = setTimeout(arguments_callee1, v || 100);
                        }
                    }
                })(500);

                $([document.body, window]).on('touchend mouseup.xdsoft', function arguments_callee2() {
                    clearTimeout(timer);
                    stop = true;
                    $([document.body, window]).off('touchend mouseup.xdsoft', arguments_callee2);
                });
            });

            timepicker.find('.xdsoft_prev,.xdsoft_next').on('touchend mousedown.xdsoft', function () {
                var $this = $(this),
                    timer = 0,
                    stop = false,
                    period = 110;
                (function arguments_callee4(v) {
                    var pheight = timeboxparent[0].clientHeight,
                        height = timebox[0].offsetHeight,
                        top = Math.abs(parseInt(timebox.css('marginTop'), 10));
                    if ($this.hasClass(options.next) && height - pheight - options.timeHeightInTimePicker >= top) {
                        timebox.css('marginTop', '-' + (top + options.timeHeightInTimePicker) + 'px');
                    } else if ($this.hasClass(options.prev) && top - options.timeHeightInTimePicker >= 0) {
                        timebox.css('marginTop', '-' + (top - options.timeHeightInTimePicker) + 'px');
                    }
                    /**
                     * Fixed bug:
                     * When using css3 transition, it will cause a bug that you cannot scroll the timepicker list.
                     * The reason is that the transition-duration time, if you set it to 0, all things fine, otherwise, this
                     * would cause a bug when you use jquery.css method.
                     * Let's say: * { transition: all .5s ease; }
                     * jquery timebox.css('marginTop') will return the original value which is before you clicking the next/prev button,
                     * meanwhile the timebox[0].style.marginTop will return the right value which is after you clicking the
                     * next/prev button.
                     *
                     * What we should do:
                     * Replace timebox.css('marginTop') with timebox[0].style.marginTop.
                     */
                    timeboxparent.trigger('scroll_element.xdsoft_scroller', [Math.abs(parseInt(timebox[0].style.marginTop, 10) / (height - pheight))]);
                    period = period > 10 ? 10 : period - 10;
                    if (!stop) {
                        timer = setTimeout(arguments_callee4, v || period);
                    }
                })(500);
                $([document.body, window]).on('touchend mouseup.xdsoft', function arguments_callee5() {
                    clearTimeout(timer);
                    stop = true;
                    $([document.body, window]).off('touchend mouseup.xdsoft', arguments_callee5);
                });
            });

            xchangeTimer = 0;
            // base handler - generating a calendar and timepicker
            datetimepicker.on('xchange.xdsoft', function (event) {
                clearTimeout(xchangeTimer);
                xchangeTimer = setTimeout(function () {

                    if (_xdsoft_datetime.currentTime === undefined || _xdsoft_datetime.currentTime === null) {
                        //In case blanks are allowed, delay construction until we have a valid date
                        if (options.allowBlank) return;

                        _xdsoft_datetime.currentTime = _xdsoft_datetime.now();
                    }

                    var table = '',
                        start = new Date(_xdsoft_datetime.currentTime.getFullYear(), _xdsoft_datetime.currentTime.getMonth(), 1, 12, 0, 0),
                        i = 0,
                        j,
                        today = _xdsoft_datetime.now(),
                        maxDate = false,
                        minDate = false,
                        hDate,
                        day,
                        d,
                        y,
                        m,
                        w,
                        classes = [],
                        customDateSettings,
                        newRow = true,
                        time = '',
                        h = '',
                        line_time,
                        description;

                    while (start.getDay() !== options.dayOfWeekStart) {
                        start.setDate(start.getDate() - 1);
                    }

                    table += '<table><thead><tr>';

                    if (options.weeks) {
                        table += '<th></th>';
                    }

                    for (j = 0; j < 7; j += 1) {
                        table += '<th>' + options.i18n[globalLocale].dayOfWeekShort[(j + options.dayOfWeekStart) % 7] + '</th>';
                    }

                    table += '</tr></thead>';
                    table += '<tbody>';

                    if (options.maxDate !== false) {
                        maxDate = _xdsoft_datetime.strToDate(options.maxDate);
                        maxDate = new Date(maxDate.getFullYear(), maxDate.getMonth(), maxDate.getDate(), 23, 59, 59, 999);
                    }

                    if (options.minDate !== false) {
                        minDate = _xdsoft_datetime.strToDate(options.minDate);
                        minDate = new Date(minDate.getFullYear(), minDate.getMonth(), minDate.getDate());
                    }

                    while (i < _xdsoft_datetime.currentTime.countDaysInMonth() || start.getDay() !== options.dayOfWeekStart || _xdsoft_datetime.currentTime.getMonth() === start.getMonth()) {
                        classes = [];
                        i += 1;

                        day = start.getDay();
                        d = start.getDate();
                        y = start.getFullYear();
                        m = start.getMonth();
                        w = _xdsoft_datetime.getWeekOfYear(start);
                        description = '';

                        classes.push('xdsoft_date');

                        if (options.beforeShowDay && $.isFunction(options.beforeShowDay.call)) {
                            customDateSettings = options.beforeShowDay.call(datetimepicker, start);
                        } else {
                            customDateSettings = null;
                        }

                        if (options.allowDateRe && Object.prototype.toString.call(options.allowDateRe) === "[object RegExp]") {
                            if (!options.allowDateRe.test(dateHelper.formatDate(start, options.formatDate))) {
                                classes.push('xdsoft_disabled');
                            }
                        } else if (options.allowDates && options.allowDates.length > 0) {
                            if (options.allowDates.indexOf(dateHelper.formatDate(start, options.formatDate)) === -1) {
                                classes.push('xdsoft_disabled');
                            }
                        } else if (maxDate !== false && start > maxDate || minDate !== false && start < minDate || customDateSettings && customDateSettings[0] === false) {
                            classes.push('xdsoft_disabled');
                        } else if (options.disabledDates.indexOf(dateHelper.formatDate(start, options.formatDate)) !== -1) {
                            classes.push('xdsoft_disabled');
                        } else if (options.disabledWeekDays.indexOf(day) !== -1) {
                            classes.push('xdsoft_disabled');
                        } else if (input.is('[readonly]')) {
                            classes.push('xdsoft_disabled');
                        }

                        if (customDateSettings && customDateSettings[1] !== "") {
                            classes.push(customDateSettings[1]);
                        }

                        if (_xdsoft_datetime.currentTime.getMonth() !== m) {
                            classes.push('xdsoft_other_month');
                        }

                        if ((options.defaultSelect || datetimepicker.data('changed')) && dateHelper.formatDate(_xdsoft_datetime.currentTime, options.formatDate) === dateHelper.formatDate(start, options.formatDate)) {
                            classes.push('xdsoft_current');
                        }

                        if (dateHelper.formatDate(today, options.formatDate) === dateHelper.formatDate(start, options.formatDate)) {
                            classes.push('xdsoft_today');
                        }

                        if (start.getDay() === 0 || start.getDay() === 6 || options.weekends.indexOf(dateHelper.formatDate(start, options.formatDate)) !== -1) {
                            classes.push('xdsoft_weekend');
                        }

                        if (options.highlightedDates[dateHelper.formatDate(start, options.formatDate)] !== undefined) {
                            hDate = options.highlightedDates[dateHelper.formatDate(start, options.formatDate)];
                            classes.push(hDate.style === undefined ? 'xdsoft_highlighted_default' : hDate.style);
                            description = hDate.desc === undefined ? '' : hDate.desc;
                        }

                        if (options.beforeShowDay && $.isFunction(options.beforeShowDay)) {
                            classes.push(options.beforeShowDay(start));
                        }

                        if (newRow) {
                            table += '<tr>';
                            newRow = false;
                            if (options.weeks) {
                                table += '<th>' + w + '</th>';
                            }
                        }

                        table += '<td data-date="' + d + '" data-month="' + m + '" data-year="' + y + '"' + ' class="xdsoft_date xdsoft_day_of_week' + start.getDay() + ' ' + classes.join(' ') + '" title="' + description + '">' + '<div>' + d + '</div>' + '</td>';

                        if (start.getDay() === options.dayOfWeekStartPrev) {
                            table += '</tr>';
                            newRow = true;
                        }

                        start.setDate(d + 1);
                    }
                    table += '</tbody></table>';

                    calendar.html(table);

                    month_picker.find('.xdsoft_label span').eq(0).text(options.i18n[globalLocale].months[_xdsoft_datetime.currentTime.getMonth()]);
                    month_picker.find('.xdsoft_label span').eq(1).text(_xdsoft_datetime.currentTime.getFullYear());

                    // generate timebox
                    time = '';
                    h = '';
                    m = '';

                    line_time = function line_time(h, m) {
                        var now = _xdsoft_datetime.now(),
                            optionDateTime,
                            current_time,
                            isALlowTimesInit = options.allowTimes && $.isArray(options.allowTimes) && options.allowTimes.length;
                        now.setHours(h);
                        h = parseInt(now.getHours(), 10);
                        now.setMinutes(m);
                        m = parseInt(now.getMinutes(), 10);
                        optionDateTime = new Date(_xdsoft_datetime.currentTime);
                        optionDateTime.setHours(h);
                        optionDateTime.setMinutes(m);
                        classes = [];
                        if (options.minDateTime !== false && options.minDateTime > optionDateTime || options.maxTime !== false && _xdsoft_datetime.strtotime(options.maxTime).getTime() < now.getTime() || options.minTime !== false && _xdsoft_datetime.strtotime(options.minTime).getTime() > now.getTime()) {
                            classes.push('xdsoft_disabled');
                        } else if (options.minDateTime !== false && options.minDateTime > optionDateTime || options.disabledMinTime !== false && now.getTime() > _xdsoft_datetime.strtotime(options.disabledMinTime).getTime() && options.disabledMaxTime !== false && now.getTime() < _xdsoft_datetime.strtotime(options.disabledMaxTime).getTime()) {
                            classes.push('xdsoft_disabled');
                        } else if (input.is('[readonly]')) {
                            classes.push('xdsoft_disabled');
                        }

                        current_time = new Date(_xdsoft_datetime.currentTime);
                        current_time.setHours(parseInt(_xdsoft_datetime.currentTime.getHours(), 10));

                        if (!isALlowTimesInit) {
                            current_time.setMinutes(Math[options.roundTime](_xdsoft_datetime.currentTime.getMinutes() / options.step) * options.step);
                        }

                        if ((options.initTime || options.defaultSelect || datetimepicker.data('changed')) && current_time.getHours() === parseInt(h, 10) && (!isALlowTimesInit && options.step > 59 || current_time.getMinutes() === parseInt(m, 10))) {
                            if (options.defaultSelect || datetimepicker.data('changed')) {
                                classes.push('xdsoft_current');
                            } else if (options.initTime) {
                                classes.push('xdsoft_init_time');
                            }
                        }
                        if (parseInt(today.getHours(), 10) === parseInt(h, 10) && parseInt(today.getMinutes(), 10) === parseInt(m, 10)) {
                            classes.push('xdsoft_today');
                        }
                        time += '<div class="xdsoft_time ' + classes.join(' ') + '" data-hour="' + h + '" data-minute="' + m + '">' + dateHelper.formatDate(now, options.formatTime) + '</div>';
                    };
                    if (!options.allowTimes || !$.isArray(options.allowTimes) || !options.allowTimes.length) {
                        for (i = 0, j = 0; i < (options.hours12 ? 12 : 24); i += 1) {
                            if (i >= options.minHours) {
                                for (j = 0; j < 60; j += options.step) {
                                    h = (i < 10 ? '0' : '') + i;
                                    m = (j < 10 ? '0' : '') + j;
                                    line_time(h, m);
                                }
                            }
                        }
                    } else {
                        for (i = 0; i < options.allowTimes.length; i += 1) {
                            h = _xdsoft_datetime.strtotime(options.allowTimes[i]).getHours();
                            m = _xdsoft_datetime.strtotime(options.allowTimes[i]).getMinutes();
                            line_time(h, m);
                        }
                    }

                    timebox.html(time);

                    opt = '';
                    i = 0;

                    for (i = parseInt(options.yearStart, 10) + options.yearOffset; i <= parseInt(options.yearEnd, 10) + options.yearOffset; i += 1) {
                        opt += '<div class="xdsoft_option ' + (_xdsoft_datetime.currentTime.getFullYear() === i ? 'xdsoft_current' : '') + '" data-value="' + i + '">' + i + '</div>';
                    }
                    yearselect.children().eq(0).html(opt);

                    for (i = parseInt(options.monthStart, 10), opt = ''; i <= parseInt(options.monthEnd, 10); i += 1) {
                        opt += '<div class="xdsoft_option ' + (_xdsoft_datetime.currentTime.getMonth() === i ? 'xdsoft_current' : '') + '" data-value="' + i + '">' + options.i18n[globalLocale].months[i] + '</div>';
                    }
                    monthselect.children().eq(0).html(opt);
                    $(datetimepicker).trigger('generate.xdsoft');
                }, 10);
                event.stopPropagation();
            }).on('afterOpen.xdsoft', function () {
                if (options.timepicker) {
                    var classType, pheight, height, top;
                    if (timebox.find('.xdsoft_current').length) {
                        classType = '.xdsoft_current';
                    } else if (timebox.find('.xdsoft_init_time').length) {
                        classType = '.xdsoft_init_time';
                    }
                    if (classType) {
                        pheight = timeboxparent[0].clientHeight;
                        height = timebox[0].offsetHeight;
                        top = timebox.find(classType).index() * options.timeHeightInTimePicker + 1;
                        if (height - pheight < top) {
                            top = height - pheight;
                        }
                        timeboxparent.trigger('scroll_element.xdsoft_scroller', [parseInt(top, 10) / (height - pheight)]);
                    } else {
                        timeboxparent.trigger('scroll_element.xdsoft_scroller', [0]);
                    }
                }
            });

            timerclick = 0;
            calendar.on('touchend click.xdsoft', 'td', function (xdevent) {
                xdevent.stopPropagation(); // Prevents closing of Pop-ups, Modals and Flyouts in Bootstrap
                timerclick += 1;
                var $this = $(this),
                    currentTime = _xdsoft_datetime.currentTime;

                if (currentTime === undefined || currentTime === null) {
                    _xdsoft_datetime.currentTime = _xdsoft_datetime.now();
                    currentTime = _xdsoft_datetime.currentTime;
                }

                if ($this.hasClass('xdsoft_disabled')) {
                    return false;
                }

                currentTime.setDate(1);
                currentTime.setFullYear($this.data('year'));
                currentTime.setMonth($this.data('month'));
                currentTime.setDate($this.data('date'));

                datetimepicker.trigger('select.xdsoft', [currentTime]);

                input.val(_xdsoft_datetime.str());

                if (options.onSelectDate && $.isFunction(options.onSelectDate)) {
                    options.onSelectDate.call(datetimepicker, _xdsoft_datetime.currentTime, datetimepicker.data('input'), xdevent);
                }

                datetimepicker.data('changed', true);
                datetimepicker.trigger('xchange.xdsoft');
                datetimepicker.trigger('changedatetime.xdsoft');
                if ((timerclick > 1 || options.closeOnDateSelect === true || options.closeOnDateSelect === false && !options.timepicker) && !options.inline) {
                    datetimepicker.trigger('close.xdsoft');
                }
                setTimeout(function () {
                    timerclick = 0;
                }, 200);
            });

            timebox.on('touchmove', 'div', function () {
                currentlyScrollingTimeDiv = true;
            }).on('touchend click.xdsoft', 'div', function (xdevent) {
                xdevent.stopPropagation();
                if (currentlyScrollingTimeDiv) {
                    currentlyScrollingTimeDiv = false;
                    return;
                }
                var $this = $(this),
                    currentTime = _xdsoft_datetime.currentTime;

                if (currentTime === undefined || currentTime === null) {
                    _xdsoft_datetime.currentTime = _xdsoft_datetime.now();
                    currentTime = _xdsoft_datetime.currentTime;
                }

                if ($this.hasClass('xdsoft_disabled')) {
                    return false;
                }
                currentTime.setHours($this.data('hour'));
                currentTime.setMinutes($this.data('minute'));
                datetimepicker.trigger('select.xdsoft', [currentTime]);

                datetimepicker.data('input').val(_xdsoft_datetime.str());

                if (options.onSelectTime && $.isFunction(options.onSelectTime)) {
                    options.onSelectTime.call(datetimepicker, _xdsoft_datetime.currentTime, datetimepicker.data('input'), xdevent);
                }
                datetimepicker.data('changed', true);
                datetimepicker.trigger('xchange.xdsoft');
                datetimepicker.trigger('changedatetime.xdsoft');
                if (options.inline !== true && options.closeOnTimeSelect === true) {
                    datetimepicker.trigger('close.xdsoft');
                }
            });

            datepicker.on('mousewheel.xdsoft', function (event) {
                if (!options.scrollMonth) {
                    return true;
                }
                if (event.deltaY < 0) {
                    _xdsoft_datetime.nextMonth();
                } else {
                    _xdsoft_datetime.prevMonth();
                }
                return false;
            });

            input.on('mousewheel.xdsoft', function (event) {
                if (!options.scrollInput) {
                    return true;
                }
                if (!options.datepicker && options.timepicker) {
                    current_time_index = timebox.find('.xdsoft_current').length ? timebox.find('.xdsoft_current').eq(0).index() : 0;
                    if (current_time_index + event.deltaY >= 0 && current_time_index + event.deltaY < timebox.children().length) {
                        current_time_index += event.deltaY;
                    }
                    if (timebox.children().eq(current_time_index).length) {
                        timebox.children().eq(current_time_index).trigger('mousedown');
                    }
                    return false;
                }
                if (options.datepicker && !options.timepicker) {
                    datepicker.trigger(event, [event.deltaY, event.deltaX, event.deltaY]);
                    if (input.val) {
                        input.val(_xdsoft_datetime.str());
                    }
                    datetimepicker.trigger('changedatetime.xdsoft');
                    return false;
                }
            });

            datetimepicker.on('changedatetime.xdsoft', function (event) {
                if (options.onChangeDateTime && $.isFunction(options.onChangeDateTime)) {
                    var $input = datetimepicker.data('input');
                    options.onChangeDateTime.call(datetimepicker, _xdsoft_datetime.currentTime, $input, event);
                    delete options.value;
                    $input.trigger('change');
                }
            }).on('generate.xdsoft', function () {
                if (options.onGenerate && $.isFunction(options.onGenerate)) {
                    options.onGenerate.call(datetimepicker, _xdsoft_datetime.currentTime, datetimepicker.data('input'));
                }
                if (triggerAfterOpen) {
                    datetimepicker.trigger('afterOpen.xdsoft');
                    triggerAfterOpen = false;
                }
            }).on('click.xdsoft', function (xdevent) {
                xdevent.stopPropagation();
            });

            current_time_index = 0;

            /**
             * Runs the callback for each of the specified node's ancestors.
             *
             * Return FALSE from the callback to stop ascending.
             *
             * @param {DOMNode} node
             * @param {Function} callback
             * @returns {undefined}
             */
            forEachAncestorOf = function forEachAncestorOf(node, callback) {
                do {
                    node = node.parentNode;

                    if (callback(node) === false) {
                        break;
                    }
                } while (node.nodeName !== 'HTML');
            };

            /**
             * Sets the position of the picker.
             *
             * @returns {undefined}
             */
            setPos = function setPos() {
                var dateInputOffset, dateInputElem, verticalPosition, left, position, datetimepickerElem, dateInputHasFixedAncestor, $dateInput, windowWidth, verticalAnchorEdge, datetimepickerCss, windowHeight, windowScrollTop;

                $dateInput = datetimepicker.data('input');
                dateInputOffset = $dateInput.offset();
                dateInputElem = $dateInput[0];

                verticalAnchorEdge = 'top';
                verticalPosition = dateInputOffset.top + dateInputElem.offsetHeight - 1;
                left = dateInputOffset.left;
                position = "absolute";

                windowWidth = $(window).width();
                windowHeight = $(window).height();
                windowScrollTop = $(window).scrollTop();

                if (document.documentElement.clientWidth - dateInputOffset.left < datepicker.parent().outerWidth(true)) {
                    var diff = datepicker.parent().outerWidth(true) - dateInputElem.offsetWidth;
                    left = left - diff;
                }

                if ($dateInput.parent().css('direction') === 'rtl') {
                    left -= datetimepicker.outerWidth() - $dateInput.outerWidth();
                }

                if (options.fixed) {
                    verticalPosition -= windowScrollTop;
                    left -= $(window).scrollLeft();
                    position = "fixed";
                } else {
                    dateInputHasFixedAncestor = false;

                    forEachAncestorOf(dateInputElem, function (ancestorNode) {
                        if (window.getComputedStyle(ancestorNode).getPropertyValue('position') === 'fixed') {
                            dateInputHasFixedAncestor = true;
                            return false;
                        }
                    });

                    if (dateInputHasFixedAncestor) {
                        position = 'fixed';

                        //If the picker won't fit entirely within the viewport then display it above the date input.
                        if (verticalPosition + datetimepicker.outerHeight() > windowHeight + windowScrollTop) {
                            verticalAnchorEdge = 'bottom';
                            verticalPosition = windowHeight + windowScrollTop - dateInputOffset.top;
                        } else {
                            verticalPosition -= windowScrollTop;
                        }
                    } else {
                        if (verticalPosition + dateInputElem.offsetHeight > windowHeight + windowScrollTop) {
                            verticalPosition = dateInputOffset.top - dateInputElem.offsetHeight + 1;
                        }
                    }

                    if (verticalPosition < 0) {
                        verticalPosition = 0;
                    }

                    if (left + dateInputElem.offsetWidth > windowWidth) {
                        left = windowWidth - dateInputElem.offsetWidth;
                    }
                }

                datetimepickerElem = datetimepicker[0];

                forEachAncestorOf(datetimepickerElem, function (ancestorNode) {
                    var ancestorNodePosition;

                    ancestorNodePosition = window.getComputedStyle(ancestorNode).getPropertyValue('position');

                    if (ancestorNodePosition === 'relative' && windowWidth >= ancestorNode.offsetWidth) {
                        left = left - (windowWidth - ancestorNode.offsetWidth) / 2;
                        return false;
                    }
                });

                datetimepickerCss = {
                    position: position,
                    left: left,
                    top: '', //Initialize to prevent previous values interfering with new ones.
                    bottom: '' //Initialize to prevent previous values interfering with new ones.
                };

                datetimepickerCss[verticalAnchorEdge] = verticalPosition;

                datetimepicker.css(datetimepickerCss);
            };

            datetimepicker.on('open.xdsoft', function (event) {
                var onShow = true;
                if (options.onShow && $.isFunction(options.onShow)) {
                    onShow = options.onShow.call(datetimepicker, _xdsoft_datetime.currentTime, datetimepicker.data('input'), event);
                }
                if (onShow !== false) {
                    datetimepicker.show();
                    setPos();
                    $(window).off('resize.xdsoft', setPos).on('resize.xdsoft', setPos);

                    if (options.closeOnWithoutClick) {
                        $([document.body, window]).on('touchstart mousedown.xdsoft', function arguments_callee6() {
                            datetimepicker.trigger('close.xdsoft');
                            $([document.body, window]).off('touchstart mousedown.xdsoft', arguments_callee6);
                        });
                    }
                }
            }).on('close.xdsoft', function (event) {
                var onClose = true;
                month_picker.find('.xdsoft_month,.xdsoft_year').find('.xdsoft_select').hide();
                if (options.onClose && $.isFunction(options.onClose)) {
                    onClose = options.onClose.call(datetimepicker, _xdsoft_datetime.currentTime, datetimepicker.data('input'), event);
                }
                if (onClose !== false && !options.opened && !options.inline) {
                    datetimepicker.hide();
                }
                event.stopPropagation();
            }).on('toggle.xdsoft', function () {
                if (datetimepicker.is(':visible')) {
                    datetimepicker.trigger('close.xdsoft');
                } else {
                    datetimepicker.trigger('open.xdsoft');
                }
            }).data('input', input);

            timer = 0;

            datetimepicker.data('xdsoft_datetime', _xdsoft_datetime);
            datetimepicker.setOptions(options);

            function getCurrentValue() {
                var ct = false,
                    time;

                if (options.startDate) {
                    ct = _xdsoft_datetime.strToDate(options.startDate);
                } else {
                    ct = options.value || (input && input.val && input.val() ? input.val() : '');
                    if (ct) {
                        ct = _xdsoft_datetime.strToDateTime(ct);
                    } else if (options.defaultDate) {
                        ct = _xdsoft_datetime.strToDateTime(options.defaultDate);
                        if (options.defaultTime) {
                            time = _xdsoft_datetime.strtotime(options.defaultTime);
                            ct.setHours(time.getHours());
                            ct.setMinutes(time.getMinutes());
                        }
                    }
                }

                if (ct && _xdsoft_datetime.isValidDate(ct)) {
                    datetimepicker.data('changed', true);
                } else {
                    ct = '';
                }

                return ct || 0;
            }

            function setMask(options) {

                var isValidValue = function isValidValue(mask, value) {
                    var reg = mask.replace(/([\[\]\/\{\}\(\)\-\.\+]{1})/g, '\\$1').replace(/_/g, '{digit+}').replace(/([0-9]{1})/g, '{digit$1}').replace(/\{digit([0-9]{1})\}/g, '[0-$1_]{1}').replace(/\{digit[\+]\}/g, '[0-9_]{1}');
                    return new RegExp(reg).test(value);
                },
                    getCaretPos = function getCaretPos(input) {
                    try {
                        if (document.selection && document.selection.createRange) {
                            var range = document.selection.createRange();
                            return range.getBookmark().charCodeAt(2) - 2;
                        }
                        if (input.setSelectionRange) {
                            return input.selectionStart;
                        }
                    } catch (e) {
                        return 0;
                    }
                },
                    setCaretPos = function setCaretPos(node, pos) {
                    node = typeof node === "string" || node instanceof String ? document.getElementById(node) : node;
                    if (!node) {
                        return false;
                    }
                    if (node.createTextRange) {
                        var textRange = node.createTextRange();
                        textRange.collapse(true);
                        textRange.moveEnd('character', pos);
                        textRange.moveStart('character', pos);
                        textRange.select();
                        return true;
                    }
                    if (node.setSelectionRange) {
                        node.setSelectionRange(pos, pos);
                        return true;
                    }
                    return false;
                };
                if (options.mask) {
                    input.off('keydown.xdsoft');
                }
                if (options.mask === true) {
                    if (typeof moment != 'undefined') {
                        options.mask = options.format.replace(/Y{4}/g, '9999').replace(/Y{2}/g, '99').replace(/M{2}/g, '19').replace(/D{2}/g, '39').replace(/H{2}/g, '29').replace(/m{2}/g, '59').replace(/s{2}/g, '59');
                    } else {
                        options.mask = options.format.replace(/Y/g, '9999').replace(/F/g, '9999').replace(/m/g, '19').replace(/d/g, '39').replace(/H/g, '29').replace(/i/g, '59').replace(/s/g, '59');
                    }
                }

                if ($.type(options.mask) === 'string') {
                    if (!isValidValue(options.mask, input.val())) {
                        input.val(options.mask.replace(/[0-9]/g, '_'));
                        setCaretPos(input[0], 0);
                    }

                    input.on('keydown.xdsoft', function (event) {
                        var val = this.value,
                            key = event.which,
                            pos,
                            digit;

                        if (key >= KEY0 && key <= KEY9 || key >= _KEY0 && key <= _KEY9 || key === BACKSPACE || key === DEL) {
                            pos = getCaretPos(this);
                            digit = key !== BACKSPACE && key !== DEL ? String.fromCharCode(_KEY0 <= key && key <= _KEY9 ? key - KEY0 : key) : '_';

                            if ((key === BACKSPACE || key === DEL) && pos) {
                                pos -= 1;
                                digit = '_';
                            }

                            while (/[^0-9_]/.test(options.mask.substr(pos, 1)) && pos < options.mask.length && pos > 0) {
                                pos += key === BACKSPACE || key === DEL ? -1 : 1;
                            }

                            val = val.substr(0, pos) + digit + val.substr(pos + 1);
                            if ($.trim(val) === '') {
                                val = options.mask.replace(/[0-9]/g, '_');
                            } else {
                                if (pos === options.mask.length) {
                                    event.preventDefault();
                                    return false;
                                }
                            }

                            pos += key === BACKSPACE || key === DEL ? 0 : 1;
                            while (/[^0-9_]/.test(options.mask.substr(pos, 1)) && pos < options.mask.length && pos > 0) {
                                pos += key === BACKSPACE || key === DEL ? -1 : 1;
                            }

                            if (isValidValue(options.mask, val)) {
                                this.value = val;
                                setCaretPos(this, pos);
                            } else if ($.trim(val) === '') {
                                this.value = options.mask.replace(/[0-9]/g, '_');
                            } else {
                                input.trigger('error_input.xdsoft');
                            }
                        } else {
                            if ([AKEY, CKEY, VKEY, ZKEY, YKEY].indexOf(key) !== -1 && ctrlDown || [ESC, ARROWUP, ARROWDOWN, ARROWLEFT, ARROWRIGHT, F5, CTRLKEY, TAB, ENTER].indexOf(key) !== -1) {
                                return true;
                            }
                        }

                        event.preventDefault();
                        return false;
                    });
                }
            }

            _xdsoft_datetime.setCurrentTime(getCurrentValue());

            input.data('xdsoft_datetimepicker', datetimepicker).on('open.xdsoft focusin.xdsoft mousedown.xdsoft touchstart', function () {
                if (input.is(':disabled') || input.data('xdsoft_datetimepicker').is(':visible') && options.closeOnInputClick) {
                    return;
                }
                clearTimeout(timer);
                timer = setTimeout(function () {
                    if (input.is(':disabled')) {
                        return;
                    }

                    triggerAfterOpen = true;
                    _xdsoft_datetime.setCurrentTime(getCurrentValue(), true);
                    if (options.mask) {
                        setMask(options);
                    }
                    datetimepicker.trigger('open.xdsoft');
                }, 100);
            }).on('keydown.xdsoft', function (event) {
                var elementSelector,
                    key = event.which;
                if ([ENTER].indexOf(key) !== -1 && options.enterLikeTab) {
                    elementSelector = $("input:visible,textarea:visible,button:visible,a:visible");
                    datetimepicker.trigger('close.xdsoft');
                    elementSelector.eq(elementSelector.index(this) + 1).focus();
                    return false;
                }
                if ([TAB].indexOf(key) !== -1) {
                    datetimepicker.trigger('close.xdsoft');
                    return true;
                }
            }).on('blur.xdsoft', function () {
                datetimepicker.trigger('close.xdsoft');
            });
        };
        destroyDateTimePicker = function destroyDateTimePicker(input) {
            var datetimepicker = input.data('xdsoft_datetimepicker');
            if (datetimepicker) {
                datetimepicker.data('xdsoft_datetime', null);
                datetimepicker.remove();
                input.data('xdsoft_datetimepicker', null).off('.xdsoft');
                $(window).off('resize.xdsoft');
                $([window, document.body]).off('mousedown.xdsoft touchstart');
                if (input.unmousewheel) {
                    input.unmousewheel();
                }
            }
        };
        $(document).off('keydown.xdsoftctrl keyup.xdsoftctrl').on('keydown.xdsoftctrl', function (e) {
            if (e.keyCode === CTRLKEY) {
                ctrlDown = true;
            }
        }).on('keyup.xdsoftctrl', function (e) {
            if (e.keyCode === CTRLKEY) {
                ctrlDown = false;
            }
        });

        this.each(function () {
            var datetimepicker = $(this).data('xdsoft_datetimepicker'),
                $input;
            if (datetimepicker) {
                if ($.type(opt) === 'string') {
                    switch (opt) {
                        case 'show':
                            $(this).select().focus();
                            datetimepicker.trigger('open.xdsoft');
                            break;
                        case 'hide':
                            datetimepicker.trigger('close.xdsoft');
                            break;
                        case 'toggle':
                            datetimepicker.trigger('toggle.xdsoft');
                            break;
                        case 'destroy':
                            destroyDateTimePicker($(this));
                            break;
                        case 'reset':
                            this.value = this.defaultValue;
                            if (!this.value || !datetimepicker.data('xdsoft_datetime').isValidDate(dateHelper.parseDate(this.value, options.format))) {
                                datetimepicker.data('changed', false);
                            }
                            datetimepicker.data('xdsoft_datetime').setCurrentTime(this.value);
                            break;
                        case 'validate':
                            $input = datetimepicker.data('input');
                            $input.trigger('blur.xdsoft');
                            break;
                        default:
                            if (datetimepicker[opt] && $.isFunction(datetimepicker[opt])) {
                                result = datetimepicker[opt](opt2);
                            }
                    }
                } else {
                    datetimepicker.setOptions(opt);
                }
                return 0;
            }
            if ($.type(opt) !== 'string') {
                if (!options.lazyInit || options.open || options.inline) {
                    createDateTimePicker($(this));
                } else {
                    lazyInit($(this));
                }
            }
        });

        return result;
    };

    $.fn.datetimepicker.defaults = default_options;

    function HighlightedDate(date, desc, style) {
        "use strict";

        this.date = date;
        this.desc = desc;
        this.style = style;
    }
});
/*!
 * jQuery Mousewheel 3.1.13
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 */

(function (factory) {
    if (true) {
        // AMD. Register as an anonymous module.
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(17)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if ((typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object') {
        // Node/CommonJS style for Browserify
        module.exports = factory;
    } else {
        // Browser globals
        factory(jQuery);
    }
})(function ($) {

    var toFix = ['wheel', 'mousewheel', 'DOMMouseScroll', 'MozMousePixelScroll'],
        toBind = 'onwheel' in document || document.documentMode >= 9 ? ['wheel'] : ['mousewheel', 'DomMouseScroll', 'MozMousePixelScroll'],
        slice = Array.prototype.slice,
        nullLowestDeltaTimeout,
        lowestDelta;

    if ($.event.fixHooks) {
        for (var i = toFix.length; i;) {
            $.event.fixHooks[toFix[--i]] = $.event.mouseHooks;
        }
    }

    var special = $.event.special.mousewheel = {
        version: '3.1.12',

        setup: function setup() {
            if (this.addEventListener) {
                for (var i = toBind.length; i;) {
                    this.addEventListener(toBind[--i], handler, false);
                }
            } else {
                this.onmousewheel = handler;
            }
            // Store the line height and page height for this particular element
            $.data(this, 'mousewheel-line-height', special.getLineHeight(this));
            $.data(this, 'mousewheel-page-height', special.getPageHeight(this));
        },

        teardown: function teardown() {
            if (this.removeEventListener) {
                for (var i = toBind.length; i;) {
                    this.removeEventListener(toBind[--i], handler, false);
                }
            } else {
                this.onmousewheel = null;
            }
            // Clean up the data we added to the element
            $.removeData(this, 'mousewheel-line-height');
            $.removeData(this, 'mousewheel-page-height');
        },

        getLineHeight: function getLineHeight(elem) {
            var $elem = $(elem),
                $parent = $elem['offsetParent' in $.fn ? 'offsetParent' : 'parent']();
            if (!$parent.length) {
                $parent = $('body');
            }
            return parseInt($parent.css('fontSize'), 10) || parseInt($elem.css('fontSize'), 10) || 16;
        },

        getPageHeight: function getPageHeight(elem) {
            return $(elem).height();
        },

        settings: {
            adjustOldDeltas: true, // see shouldAdjustOldDeltas() below
            normalizeOffset: true // calls getBoundingClientRect for each event
        }
    };

    $.fn.extend({
        mousewheel: function mousewheel(fn) {
            return fn ? this.bind('mousewheel', fn) : this.trigger('mousewheel');
        },

        unmousewheel: function unmousewheel(fn) {
            return this.unbind('mousewheel', fn);
        }
    });

    function handler(event) {
        var orgEvent = event || window.event,
            args = slice.call(arguments, 1),
            delta = 0,
            deltaX = 0,
            deltaY = 0,
            absDelta = 0,
            offsetX = 0,
            offsetY = 0;
        event = $.event.fix(orgEvent);
        event.type = 'mousewheel';

        // Old school scrollwheel delta
        if ('detail' in orgEvent) {
            deltaY = orgEvent.detail * -1;
        }
        if ('wheelDelta' in orgEvent) {
            deltaY = orgEvent.wheelDelta;
        }
        if ('wheelDeltaY' in orgEvent) {
            deltaY = orgEvent.wheelDeltaY;
        }
        if ('wheelDeltaX' in orgEvent) {
            deltaX = orgEvent.wheelDeltaX * -1;
        }

        // Firefox < 17 horizontal scrolling related to DOMMouseScroll event
        if ('axis' in orgEvent && orgEvent.axis === orgEvent.HORIZONTAL_AXIS) {
            deltaX = deltaY * -1;
            deltaY = 0;
        }

        // Set delta to be deltaY or deltaX if deltaY is 0 for backwards compatabilitiy
        delta = deltaY === 0 ? deltaX : deltaY;

        // New school wheel delta (wheel event)
        if ('deltaY' in orgEvent) {
            deltaY = orgEvent.deltaY * -1;
            delta = deltaY;
        }
        if ('deltaX' in orgEvent) {
            deltaX = orgEvent.deltaX;
            if (deltaY === 0) {
                delta = deltaX * -1;
            }
        }

        // No change actually happened, no reason to go any further
        if (deltaY === 0 && deltaX === 0) {
            return;
        }

        // Need to convert lines and pages to pixels if we aren't already in pixels
        // There are three delta modes:
        //   * deltaMode 0 is by pixels, nothing to do
        //   * deltaMode 1 is by lines
        //   * deltaMode 2 is by pages
        if (orgEvent.deltaMode === 1) {
            var lineHeight = $.data(this, 'mousewheel-line-height');
            delta *= lineHeight;
            deltaY *= lineHeight;
            deltaX *= lineHeight;
        } else if (orgEvent.deltaMode === 2) {
            var pageHeight = $.data(this, 'mousewheel-page-height');
            delta *= pageHeight;
            deltaY *= pageHeight;
            deltaX *= pageHeight;
        }

        // Store lowest absolute delta to normalize the delta values
        absDelta = Math.max(Math.abs(deltaY), Math.abs(deltaX));

        if (!lowestDelta || absDelta < lowestDelta) {
            lowestDelta = absDelta;

            // Adjust older deltas if necessary
            if (shouldAdjustOldDeltas(orgEvent, absDelta)) {
                lowestDelta /= 40;
            }
        }

        // Adjust older deltas if necessary
        if (shouldAdjustOldDeltas(orgEvent, absDelta)) {
            // Divide all the things by 40!
            delta /= 40;
            deltaX /= 40;
            deltaY /= 40;
        }

        // Get a whole, normalized value for the deltas
        delta = Math[delta >= 1 ? 'floor' : 'ceil'](delta / lowestDelta);
        deltaX = Math[deltaX >= 1 ? 'floor' : 'ceil'](deltaX / lowestDelta);
        deltaY = Math[deltaY >= 1 ? 'floor' : 'ceil'](deltaY / lowestDelta);

        // Normalise offsetX and offsetY properties
        if (special.settings.normalizeOffset && this.getBoundingClientRect) {
            var boundingRect = this.getBoundingClientRect();
            offsetX = event.clientX - boundingRect.left;
            offsetY = event.clientY - boundingRect.top;
        }

        // Add information to the event object
        event.deltaX = deltaX;
        event.deltaY = deltaY;
        event.deltaFactor = lowestDelta;
        event.offsetX = offsetX;
        event.offsetY = offsetY;
        // Go ahead and set deltaMode to 0 since we converted to pixels
        // Although this is a little odd since we overwrite the deltaX/Y
        // properties with normalized deltas.
        event.deltaMode = 0;

        // Add event and delta to the front of the arguments
        args.unshift(event, delta, deltaX, deltaY);

        // Clearout lowestDelta after sometime to better
        // handle multiple device types that give different
        // a different lowestDelta
        // Ex: trackpad = 3 and mouse wheel = 120
        if (nullLowestDeltaTimeout) {
            clearTimeout(nullLowestDeltaTimeout);
        }
        nullLowestDeltaTimeout = setTimeout(nullLowestDelta, 200);

        return ($.event.dispatch || $.event.handle).apply(this, args);
    }

    function nullLowestDelta() {
        lowestDelta = null;
    }

    function shouldAdjustOldDeltas(orgEvent, absDelta) {
        // If this is an older event and the delta is divisable by 120,
        // then we are assuming that the browser is treating this as an
        // older mouse wheel event and that we should divide the deltas
        // by 40 to try and get a more usable deltaFactor.
        // Side note, this actually impacts the reported scroll distance
        // in older browsers and can cause scrolling to be slower than native.
        // Turn this off by setting $.event.special.mousewheel.settings.adjustOldDeltas to false.
        return special.settings.adjustOldDeltas && orgEvent.type === 'mousewheel' && absDelta % 120 === 0;
    }
});

/***/ }),

/***/ 209:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery Mousewheel 3.1.13
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 */

(function (factory) {
    if ( true ) {
        // AMD. Register as an anonymous module.
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(17)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports === 'object') {
        // Node/CommonJS style for Browserify
        module.exports = factory;
    } else {
        // Browser globals
        factory(jQuery);
    }
}(function ($) {

    var toFix  = ['wheel', 'mousewheel', 'DOMMouseScroll', 'MozMousePixelScroll'],
        toBind = ( 'onwheel' in document || document.documentMode >= 9 ) ?
                    ['wheel'] : ['mousewheel', 'DomMouseScroll', 'MozMousePixelScroll'],
        slice  = Array.prototype.slice,
        nullLowestDeltaTimeout, lowestDelta;

    if ( $.event.fixHooks ) {
        for ( var i = toFix.length; i; ) {
            $.event.fixHooks[ toFix[--i] ] = $.event.mouseHooks;
        }
    }

    var special = $.event.special.mousewheel = {
        version: '3.1.12',

        setup: function() {
            if ( this.addEventListener ) {
                for ( var i = toBind.length; i; ) {
                    this.addEventListener( toBind[--i], handler, false );
                }
            } else {
                this.onmousewheel = handler;
            }
            // Store the line height and page height for this particular element
            $.data(this, 'mousewheel-line-height', special.getLineHeight(this));
            $.data(this, 'mousewheel-page-height', special.getPageHeight(this));
        },

        teardown: function() {
            if ( this.removeEventListener ) {
                for ( var i = toBind.length; i; ) {
                    this.removeEventListener( toBind[--i], handler, false );
                }
            } else {
                this.onmousewheel = null;
            }
            // Clean up the data we added to the element
            $.removeData(this, 'mousewheel-line-height');
            $.removeData(this, 'mousewheel-page-height');
        },

        getLineHeight: function(elem) {
            var $elem = $(elem),
                $parent = $elem['offsetParent' in $.fn ? 'offsetParent' : 'parent']();
            if (!$parent.length) {
                $parent = $('body');
            }
            return parseInt($parent.css('fontSize'), 10) || parseInt($elem.css('fontSize'), 10) || 16;
        },

        getPageHeight: function(elem) {
            return $(elem).height();
        },

        settings: {
            adjustOldDeltas: true, // see shouldAdjustOldDeltas() below
            normalizeOffset: true  // calls getBoundingClientRect for each event
        }
    };

    $.fn.extend({
        mousewheel: function(fn) {
            return fn ? this.bind('mousewheel', fn) : this.trigger('mousewheel');
        },

        unmousewheel: function(fn) {
            return this.unbind('mousewheel', fn);
        }
    });


    function handler(event) {
        var orgEvent   = event || window.event,
            args       = slice.call(arguments, 1),
            delta      = 0,
            deltaX     = 0,
            deltaY     = 0,
            absDelta   = 0,
            offsetX    = 0,
            offsetY    = 0;
        event = $.event.fix(orgEvent);
        event.type = 'mousewheel';

        // Old school scrollwheel delta
        if ( 'detail'      in orgEvent ) { deltaY = orgEvent.detail * -1;      }
        if ( 'wheelDelta'  in orgEvent ) { deltaY = orgEvent.wheelDelta;       }
        if ( 'wheelDeltaY' in orgEvent ) { deltaY = orgEvent.wheelDeltaY;      }
        if ( 'wheelDeltaX' in orgEvent ) { deltaX = orgEvent.wheelDeltaX * -1; }

        // Firefox < 17 horizontal scrolling related to DOMMouseScroll event
        if ( 'axis' in orgEvent && orgEvent.axis === orgEvent.HORIZONTAL_AXIS ) {
            deltaX = deltaY * -1;
            deltaY = 0;
        }

        // Set delta to be deltaY or deltaX if deltaY is 0 for backwards compatabilitiy
        delta = deltaY === 0 ? deltaX : deltaY;

        // New school wheel delta (wheel event)
        if ( 'deltaY' in orgEvent ) {
            deltaY = orgEvent.deltaY * -1;
            delta  = deltaY;
        }
        if ( 'deltaX' in orgEvent ) {
            deltaX = orgEvent.deltaX;
            if ( deltaY === 0 ) { delta  = deltaX * -1; }
        }

        // No change actually happened, no reason to go any further
        if ( deltaY === 0 && deltaX === 0 ) { return; }

        // Need to convert lines and pages to pixels if we aren't already in pixels
        // There are three delta modes:
        //   * deltaMode 0 is by pixels, nothing to do
        //   * deltaMode 1 is by lines
        //   * deltaMode 2 is by pages
        if ( orgEvent.deltaMode === 1 ) {
            var lineHeight = $.data(this, 'mousewheel-line-height');
            delta  *= lineHeight;
            deltaY *= lineHeight;
            deltaX *= lineHeight;
        } else if ( orgEvent.deltaMode === 2 ) {
            var pageHeight = $.data(this, 'mousewheel-page-height');
            delta  *= pageHeight;
            deltaY *= pageHeight;
            deltaX *= pageHeight;
        }

        // Store lowest absolute delta to normalize the delta values
        absDelta = Math.max( Math.abs(deltaY), Math.abs(deltaX) );

        if ( !lowestDelta || absDelta < lowestDelta ) {
            lowestDelta = absDelta;

            // Adjust older deltas if necessary
            if ( shouldAdjustOldDeltas(orgEvent, absDelta) ) {
                lowestDelta /= 40;
            }
        }

        // Adjust older deltas if necessary
        if ( shouldAdjustOldDeltas(orgEvent, absDelta) ) {
            // Divide all the things by 40!
            delta  /= 40;
            deltaX /= 40;
            deltaY /= 40;
        }

        // Get a whole, normalized value for the deltas
        delta  = Math[ delta  >= 1 ? 'floor' : 'ceil' ](delta  / lowestDelta);
        deltaX = Math[ deltaX >= 1 ? 'floor' : 'ceil' ](deltaX / lowestDelta);
        deltaY = Math[ deltaY >= 1 ? 'floor' : 'ceil' ](deltaY / lowestDelta);

        // Normalise offsetX and offsetY properties
        if ( special.settings.normalizeOffset && this.getBoundingClientRect ) {
            var boundingRect = this.getBoundingClientRect();
            offsetX = event.clientX - boundingRect.left;
            offsetY = event.clientY - boundingRect.top;
        }

        // Add information to the event object
        event.deltaX = deltaX;
        event.deltaY = deltaY;
        event.deltaFactor = lowestDelta;
        event.offsetX = offsetX;
        event.offsetY = offsetY;
        // Go ahead and set deltaMode to 0 since we converted to pixels
        // Although this is a little odd since we overwrite the deltaX/Y
        // properties with normalized deltas.
        event.deltaMode = 0;

        // Add event and delta to the front of the arguments
        args.unshift(event, delta, deltaX, deltaY);

        // Clearout lowestDelta after sometime to better
        // handle multiple device types that give different
        // a different lowestDelta
        // Ex: trackpad = 3 and mouse wheel = 120
        if (nullLowestDeltaTimeout) { clearTimeout(nullLowestDeltaTimeout); }
        nullLowestDeltaTimeout = setTimeout(nullLowestDelta, 200);

        return ($.event.dispatch || $.event.handle).apply(this, args);
    }

    function nullLowestDelta() {
        lowestDelta = null;
    }

    function shouldAdjustOldDeltas(orgEvent, absDelta) {
        // If this is an older event and the delta is divisable by 120,
        // then we are assuming that the browser is treating this as an
        // older mouse wheel event and that we should divide the deltas
        // by 40 to try and get a more usable deltaFactor.
        // Side note, this actually impacts the reported scroll distance
        // in older browsers and can cause scrolling to be slower than native.
        // Turn this off by setting $.event.special.mousewheel.settings.adjustOldDeltas to false.
        return special.settings.adjustOldDeltas && orgEvent.type === 'mousewheel' && absDelta % 120 === 0;
    }

}));


/***/ }),

/***/ 210:
/***/ (function(module, exports) {

/**
 * @author: xgc-whj
 * @date: 2017-12-27
 * @version: v1.1
 */
/**
 var options = {
 //可选，每页显示条数下拉框，默认下拉框5条/页(默认)、10条/页、15条/页、20条/页
 pageSizeOpt: [
 {'value': 5, 'text': '5条/页', 'selected': true},
 {'value': 10, 'text': '10条/页'},
 {'value': 15, 'text': '15条/页'},
 {'value': 20, 'text': '20条/页'}
 ],
 //可选，css设置，可设置值：css-1，css-2，css-3，css-4，css-5，默认css-1，可自定义样式
 css: 'css-1',
 //可选，总页数
 totalPage: 100,
 //可选，展示页码数量，默认5个页码数量
 showPageNum: 5,
 //可选，首页按钮展示文本，默认显示文本为首页
 firstPage: '首页',
 //可选，上一页按钮展示文本，默认显示文本为上一页
 previousPage: '上一页',
 //可选，下一页按钮展示文本，默认显示文本为下一页
 nextPage: '下一页',
 //可选，尾页按钮展示文本，默认显示文本为尾页
 lastPage: '尾页',
 //可选，跳至展示文本，默认显示文本为跳至
 skip: '跳至',
 //可选，确认按钮展示文本，默认显示文本为确认
 confirm: '确认',
 //可选，刷新按钮展示文本，默认显示文本为刷新
 refresh: '刷新',
 //可选，共{}页展示文本，默认显示文本为共{}页，其中{}会在js具体转化为数字
 totalPageText: '共{}页',
 //可选，是否展示首页与尾页，默认true
 isShowFL: true,
 //可选，是否展示每页N条下拉框，默认true
 isShowPageSizeOpt: true,
 //可选，是否展示跳到指定页数，默认true
 isShowSkip: true,
 //可选，是否展示刷新，默认true
 isShowRefresh: true,
 //可选，是否展示共{}页，默认true
 isShowTotalPage: true,
 //可选，是否重新设置当前页码及总页数，当请求服务器返回数据时，默认false
 isResetPage: false,
 //必选，回掉函数，返回参数：第一个参数为页码，第二个参数为每页显示N条
 callBack: function (currPage, pageSize) {
 console.log('currPage:' + currPage + '     pageSize:' + pageSize);
 }
 };
 */
(function (a) {
    $.fn.extend({
        pagination: function pagination(b, j, c) {
            var g = $(this);
            if (b === "getPage") {
                return [g.get(0).pageText.currPage, g.get(0).pageText.totalPage];
            } else {
                if (b === "setPage") {
                    g.get(0).pageText.currPage = j;
                    g.get(0).pageText.totalPage = c;
                    if (g.get(0).pageText.pageSize != null) {
                        g.get(0).pageText.totalSize = c * g.get(0).pageText.pageSize;
                    }
                } else {
                    if (g.get(0).pageText == null) {
                        var m = [{
                            value: 5,
                            text: "5条/页",
                            selected: true
                        }, {
                            value: 10,
                            text: "10条/页"
                        }, {
                            value: 15,
                            text: "15条/页"
                        }, {
                            value: 20,
                            text: "20条/页"
                        }];
                        if (b.pageSizeOpt != null) {
                            m = b.pageSizeOpt;
                        }
                        var p = m[0].value;
                        for (var t in m) {
                            if (m[t].selected) {
                                p = m[t].value;
                                break;
                            }
                        }
                        var d = "whj_jqueryPaginationCss-1";
                        if (b.css != null) {
                            switch (b.css) {
                                case "css-2":
                                    d = "whj_jqueryPaginationCss-2";
                                    break;
                                case "css-3":
                                    d = "whj_jqueryPaginationCss-3";
                                    break;
                                case "css-4":
                                    d = "whj_jqueryPaginationCss-4";
                                    break;
                                case "css-5":
                                    d = "whj_jqueryPaginationCss-5";
                                    break;
                                default:
                                    d = b.css;
                            }
                        }
                        g.get(0).pageText = {
                            css: d,
                            pageSizeOpt: m,
                            totalPage: b.totalPage,
                            showPageNum: b.showPageNum != null ? b.showPageNum : 5,
                            firstPage: b.firstPage != null ? b.firstPage : "首页",
                            previousPage: b.previousPage != null ? b.previousPage : "<",
                            nextPage: b.nextPage != null ? b.nextPage : ">",
                            lastPage: b.lastPage != null ? b.lastPage : "尾页",
                            skip: b.skip != null ? b.skip : "跳至第",
                            confirm: b.confirm != null ? b.confirm : "确认",
                            refresh: b.refresh != null ? b.refresh : "刷新",
                            totalPageText: b.totalPageText != null ? b.totalPageText : "共{}页",
                            isShowFL: b.isShowFL == false ? false : true,
                            isShowPageSizeOpt: b.isShowPageSizeOpt == false ? false : true,
                            isShowSkip: b.isShowSkip == false ? false : true,
                            isShowRefresh: b.isShowRefresh == false ? false : true,
                            isShowTotalPage: b.isShowTotalPage == false ? false : true,
                            isResetPage: b.isResetPage == true ? true : false,
                            callBack: b.callBack,
                            currPage: 1,
                            totalSize: p * (b.totalPage != null ? b.totalPage : 0),
                            pageSize: (b.isShowPageSizeOpt == false ? false : true) ? p : null
                        };
                    }
                }
            }
            if (g.get(0).pageText.totalPage == null || g.get(0).pageText.totalPage < 1) {
                g.html("");
                return;
            }
            var h = g.get(0).pageText.currPage < 2 ? "whj_hoverDisable" : "whj_hover";
            var e = g.get(0).pageText.currPage >= g.get(0).pageText.totalPage ? "whj_hoverDisable" : "whj_hover";
            var o = 0;
            var f = 0;
            var u = parseInt(g.get(0).pageText.showPageNum / 2);
            if (g.get(0).pageText.showPageNum < 2) {
                f = g.get(0).pageText.currPage;
            } else {
                if (g.get(0).pageText.totalPage <= parseInt(g.get(0).pageText.showPageNum)) {
                    f = 1;
                } else {
                    if (g.get(0).pageText.currPage + u > g.get(0).pageText.totalPage) {
                        f = g.get(0).pageText.totalPage - g.get(0).pageText.showPageNum + 1;
                    } else {
                        if (g.get(0).pageText.currPage - u < 1) {
                            f = 1;
                        } else {
                            f = g.get(0).pageText.currPage - u;
                        }
                    }
                }
            }
            var q = '<div class="' + g.get(0).pageText.css + '">';
            if (g.get(0).pageText.isShowFL) {
                q += '<div class="whj_border whj_padding whj_bgc ' + h + '" name="whj_firstPage">' + g.get(0).pageText.firstPage + "</div>";
            }
            q += '<div class="whj_border whj_padding whj_bgc ' + h + '" name="whj_previousPage">' + g.get(0).pageText.previousPage + "</div>";
            if (g.get(0).pageText.showPageNum > 0) {
                for (var l = f; l <= g.get(0).pageText.totalPage; l++) {
                    o++;
                    var s = g.get(0).pageText.currPage == l ? "whj_checked" : "whj_hover";
                    q += '<div class="whj_border whj_padding whj_bgc ' + s + '" name="whj_page" data-page="' + l + '">' + l + "</div>";
                    if (o >= g.get(0).pageText.showPageNum) {
                        break;
                    }
                }
            }
            q += '<div class="whj_border whj_padding whj_bgc ' + e + '" name="whj_nextPage">' + g.get(0).pageText.nextPage + "</div>";
            if (g.get(0).pageText.isShowFL) {
                q += '<div class="whj_border whj_padding whj_bgc ' + e + '" name="whj_lastPage">' + g.get(0).pageText.lastPage + "</div>";
            }
            if (g.get(0).pageText.isShowTotalPage) {
                var n = g.get(0).pageText.totalPageText.replace("{}", g.get(0).pageText.totalPage);
                q += '<div class="whj_padding whj_color">' + n + "</div>";
            }
            if (g.get(0).pageText.isShowPageSizeOpt) {
                q += '<select class="whj_border whj_bgc whj_hover" name="whj_pageSize">';
                for (var t in g.get(0).pageText.pageSizeOpt) {
                    var k = g.get(0).pageText.pageSizeOpt[t].selected ? "selected" : "";
                    q += '<option value="' + g.get(0).pageText.pageSizeOpt[t].value + '" ' + k + ">" + g.get(0).pageText.pageSizeOpt[t].text + "</option>";
                }
                q += "</select>";
            }
            if (g.get(0).pageText.isShowSkip) {
                q += '<div class="whj_padding whj_color">' + g.get(0).pageText.skip + '</div><input type="text" class="whj_border to_page_color" name="whj_toPage"/><div class="whj_border whj_padding whj_bgc whj_hover" name="whj_confirm">' + g.get(0).pageText.confirm + "</div>";
            }
            if (g.get(0).pageText.isShowRefresh) {
                q += '<div class="whj_border whj_padding whj_bgc whj_hover" name="whj_refresh">' + g.get(0).pageText.refresh + "</div>";
            }

            q += "</div>";
            g.html(q);
            if (g.get(0).pageText.isShowFL) {
                if (h == "whj_hover") {
                    g.find("div[name='whj_firstPage']").click(function () {
                        g.get(0).pageText.currPage = 1;
                        r();
                    });
                }
                if (e == "whj_hover") {
                    g.find("div[name='whj_lastPage']").click(function () {
                        g.get(0).pageText.currPage = g.get(0).pageText.totalPage;
                        r();
                    });
                }
            }
            if (h == "whj_hover") {
                g.find("div[name='whj_previousPage']").click(function () {
                    g.get(0).pageText.currPage = g.get(0).pageText.currPage - 1;
                    r();
                });
            }
            if (e == "whj_hover") {
                g.find("div[name='whj_nextPage']").click(function () {
                    g.get(0).pageText.currPage = g.get(0).pageText.currPage + 1;
                    r();
                });
            }
            if (g.find("div[name='whj_page']").length > 0) {
                g.find("div[name='whj_page']").click(function () {
                    if (!$(this).hasClass("whj_checked")) {
                        g.get(0).pageText.currPage = +$(this).data("page");
                        r();
                    }
                });
            }
            if (g.get(0).pageText.isShowPageSizeOpt) {
                g.find("select[name='whj_pageSize']").change(function () {
                    var x = +$(this).val();
                    var y = parseInt(g.get(0).pageText.totalSize / x);
                    if (y * x < g.get(0).pageText.totalSize) {
                        y++;
                    }
                    var i = [];
                    var v = g.get(0).pageText.pageSizeOpt;
                    for (var w in v) {
                        if (v[w].value == x) {
                            i.push({
                                value: v[w].value,
                                text: v[w].text,
                                selected: true
                            });
                        } else {
                            i.push({
                                value: v[w].value,
                                text: v[w].text
                            });
                        }
                    }
                    g.get(0).pageText.currPage = 1;
                    g.get(0).pageText.pageSize = x;
                    g.get(0).pageText.totalPage = y;
                    g.get(0).pageText.pageSizeOpt = i;
                    r();
                });
            }
            if (g.get(0).pageText.isShowSkip) {
                g.find("input[name='whj_toPage']").on("input", function () {
                    var i = $(this).val();
                    var v = $(this).val().replace(/\D/g, "");
                    if (i.length != v.length) {
                        $(this).val(v);
                    }
                });
                g.find("div[name='whj_confirm']").click(function () {
                    var i = g.find("input[name='whj_toPage']").val();
                    if (i.length > 0) {
                        i = +i;
                        if (i < 1) {
                            i = 1;
                        } else {
                            if (i > g.get(0).pageText.totalPage) {
                                i = g.get(0).pageText.totalPage;
                            }
                        }
                        g.get(0).pageText.currPage = i;
                        r();
                    }
                });
            }
            if (g.get(0).pageText.isShowRefresh) {
                g.find("div[name='whj_refresh']").click(function () {
                    r();
                });
            }
            function r() {
                if (g.get(0).pageText.isResetPage == false) {
                    g.pagination();
                }
                g.get(0).pageText.callBack(g.get(0).pageText.currPage, g.get(0).pageText.pageSize);
            }
        }
    });
})(window);

/***/ }),

/***/ 213:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "main table-list" }, [
    _c("div", { staticClass: "filter-form-box" }, [
      _c("div", { staticClass: "inner cf" }, [
        _c("div", { staticClass: "input-wrapper" }, [
          _c("label", { staticClass: "title", attrs: { for: "" } }, [
            _vm._v("学科")
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "input-box" }, [
            _c(
              "select",
              {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.subjectValue,
                    expression: "subjectValue"
                  }
                ],
                staticClass: "subject-select-box",
                attrs: {
                  id: "subject-select-box",
                  name: "subject-select-box",
                  title: "请选择学科",
                  "data-options": "width: 100"
                },
                on: {
                  change: function($event) {
                    var $$selectedVal = Array.prototype.filter
                      .call($event.target.options, function(o) {
                        return o.selected
                      })
                      .map(function(o) {
                        var val = "_value" in o ? o._value : o.value
                        return val
                      })
                    _vm.subjectValue = $event.target.multiple
                      ? $$selectedVal
                      : $$selectedVal[0]
                  }
                }
              },
              [
                _c("option", { attrs: { value: "" } }, [_vm._v("全部")]),
                _vm._v(" "),
                _vm._l(_vm.optionsSubject, function(option) {
                  return _c(
                    "option",
                    { domProps: { value: option.subjectId } },
                    [
                      _vm._v(
                        "\n                            " +
                          _vm._s(option.subjectName) +
                          "\n                        "
                      )
                    ]
                  )
                })
              ],
              2
            )
          ])
        ]),
        _vm._v(" "),
        _vm._m(0),
        _vm._v(" "),
        _vm._m(1),
        _vm._v(" "),
        _vm._m(2),
        _vm._v(" "),
        _vm._m(3),
        _vm._v(" "),
        _c("div", { staticClass: "input-wrapper" }, [
          _c("label", { staticClass: "title", attrs: { for: "" } }, [
            _vm._v("机构")
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "input-box" }, [
            _c(
              "select",
              {
                staticClass: "mechanism-select-box",
                attrs: {
                  id: "mechanism-select-box",
                  name: "mechanism-select-box",
                  "data-options": "width: 100",
                  "data-live-search": "true"
                }
              },
              [
                _c("option", { attrs: { value: "0" } }, [_vm._v("全部")]),
                _vm._v(" "),
                _vm._l(_vm.optionsAgency, function(option) {
                  return _c(
                    "option",
                    { domProps: { value: option.agencyId } },
                    [
                      _vm._v(
                        "\n                            " +
                          _vm._s(option.agencyName) +
                          "\n                        "
                      )
                    ]
                  )
                })
              ],
              2
            )
          ])
        ]),
        _vm._v(" "),
        _c(
          "button",
          {
            staticClass: "list-search-btn",
            attrs: { type: "button", name: "button" }
          },
          [_vm._v("搜索")]
        )
      ])
    ]),
    _vm._v(" "),
    _vm._m(4)
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "input-wrapper" }, [
      _c("label", { staticClass: "title", attrs: { for: "" } }, [
        _vm._v("年级")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "input-box" }, [
        _c(
          "select",
          {
            staticClass: "grade-select-box",
            attrs: {
              id: "grade-select-box",
              name: "grade-select-box",
              "data-options": "width: 100"
            }
          },
          [
            _c("option", { attrs: { value: "0" } }, [_vm._v("全部")]),
            _vm._v(" "),
            _c("option", { attrs: { value: "1" } }, [_vm._v("小学")]),
            _vm._v(" "),
            _c("option", { attrs: { value: "2" } }, [_vm._v("初中")]),
            _vm._v(" "),
            _c("option", { attrs: { value: "3" } }, [_vm._v("高中")])
          ]
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "input-wrapper" }, [
      _c("label", { staticClass: "title", attrs: { for: "" } }, [
        _vm._v("省市")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "input-box" }, [
        _c("div", { staticClass: "address-search-box" }, [
          _c("div", { staticClass: "city-select cf" }, [
            _c("input", {
              staticClass: "value prov-name",
              attrs: { type: "text", placeholder: "省", readonly: "readonly" }
            }),
            _vm._v(" "),
            _c("input", {
              staticClass: "value city-name",
              attrs: { type: "text", placeholder: "市", readonly: "readonly" }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "drop-down" }, [
            _c("div", { staticClass: "drop-prov" }, [
              _c("ul", { staticClass: "drop-prov-ul drop-ul" })
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "drop-city" }, [
              _c("ul", { staticClass: "drop-city-ul drop-ul" })
            ])
          ])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "input-wrapper" }, [
      _c("label", { staticClass: "title", attrs: { for: "" } }, [
        _vm._v("上传时间")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "input-box" }, [
        _c("div", { staticClass: "date-range-box" }, [
          _c("input", { attrs: { type: "hidden", name: "" } })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "input-inner" }, [
          _c("input", {
            staticClass: "input-text input-date-range",
            attrs: { type: "text", readonly: "readonly" }
          })
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "input-wrapper" }, [
      _c("label", { staticClass: "title", attrs: { for: "" } }, [
        _vm._v("状态")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "input-box" }, [
        _c(
          "select",
          {
            staticClass: "status-select-box",
            attrs: {
              id: "status-select-box",
              name: "status-select-box",
              "data-options": "width: 100"
            }
          },
          [
            _c("option", { attrs: { value: "1" } }, [_vm._v("待审核")]),
            _vm._v(" "),
            _c("option", { attrs: { value: "2" } }, [_vm._v("已通过")]),
            _vm._v(" "),
            _c("option", { attrs: { value: "3" } }, [_vm._v("退回")]),
            _vm._v(" "),
            _c("option", { attrs: { value: "4" } }, [_vm._v("试卷重复")])
          ]
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "pic-list-wrapper" }, [
      _c("div", { staticClass: "pic-number-wrapper" }, [
        _c("span", { staticClass: "info-n sum" }, [
          _vm._v("共"),
          _c("span", { staticClass: "num" }, [_vm._v("100")]),
          _vm._v("套")
        ]),
        _vm._v(" "),
        _c("span", { staticClass: "info-n vertify" }, [
          _vm._v("待审核"),
          _c("span", { staticClass: "num yellow" }, [_vm._v("40")]),
          _vm._v("套")
        ]),
        _vm._v(" "),
        _c("span", { staticClass: "info-n right" }, [
          _vm._v("已通过"),
          _c("span", { staticClass: "num green" }, [_vm._v("52")]),
          _vm._v("套")
        ]),
        _vm._v(" "),
        _c("span", { staticClass: "info-n pass" }, [
          _vm._v("退回"),
          _c("span", { staticClass: "num red" }, [_vm._v("5")]),
          _vm._v("套")
        ]),
        _vm._v(" "),
        _c("span", { staticClass: "info-n like" }, [
          _vm._v("试卷重复"),
          _c("span", { staticClass: "num red" }, [_vm._v("3")]),
          _vm._v("套")
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "search-wrapper" }, [
          _c("input", {
            staticClass: "s-input",
            attrs: { type: "text", value: "", placeholder: "试卷名称" }
          }),
          _vm._v(" "),
          _c("span", { staticClass: "search-btn" })
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "pic-form-wrapper" }, [
        _c("table", {
          staticClass: "pic-form-box",
          attrs: { id: "pic-form-box" }
        }),
        _vm._v(" "),
        _c("div", { staticClass: "m-pages", attrs: { id: "paginationBox" } })
      ])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-c874e3a8", module.exports)
  }
}

/***/ }),

/***/ 74:
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ 78:
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			memo[selector] = fn.call(this, selector);
		}

		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(74);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton) options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ 79:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(3)
/* script */
var __vue_script__ = __webpack_require__(196)
/* template */
var __vue_template__ = __webpack_require__(213)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources\\assets\\js\\page\\imagePaper\\imagePaperList.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-c874e3a8", Component.options)
  } else {
    hotAPI.reload("data-v-c874e3a8", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});