(function(global, $, factory) {
	factory(global, $);
})(this, jQuery, function(window, $) {

	var siteFns = {
		init: function() {
			var self = this;
			self.componentInit().addressPicker.init();
		},

		componentInit: function() {
			var self = this;
			if( $('select').length ) {
				initSelectBox();
				$('select').each(function() {
					var $this = $(this),
						obj = $(this).data('options');
					if( obj ) {
						obj = obj.charAt(0) === '{' && obj.charAt( obj.length - 1 ) === '}' ? stf( obj ) : stf('{' + obj + '}');
					} else {
						obj = {};
					}
					$this.selectpicker(obj);
				});
			}
			if( $('.input-date-range') ) {
				$('.input-date-range').each(function() {
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
					$this.daterangepicker(options, function(start, end, label) {
						$this.parent().prev().addClass('has-content');
						start = start.format('YYYY/DD/MM');
						end = end.format('YYYY/DD/MM');
						$this.val(start + ' - ' + end);
						$this.nextAll().eq(0).val( start ).end().eq(1).val( end );
					});

					if( $this.val() ) {
						$this.parent().prev().addClass('has-content');
					}
				});
			}
			return self;
		},
    addressPicker: {
      init: function() {
          province = '';
          city = '';
          $.ajax({
              type: "GET",
              url: "common/common/getAllProvince",
              dataType: "json",
              async:false,
              success: function(data){

				   province = data;

              }
          });
          $.ajax({
              type: "GET",
              url: "common/common/getAllCitys",
              dataType: "json",
              async:false,
              success: function(data){
              	city = data;
              }
          });

		  var self = this,

		provs = province,
		citys = city;

		self.provs = provs;
		self.citys = citys;
	 	self.render().eventInit();
    },
        render: function() {
            var self = this;

            $('.city-select').each(function() {
                var $this = $(this),
                    html = '',
					name, val;

				$this.prepend('<input name="search-prov" type="hidden" /><input name="search-city" type="hidden" />');

                $.each( self.provs, function( i, prov ) {
					prov = ~prov.indexOf('-') ? prov.split('-') : [ prov, i + 1 ];
					name = prov[0];
					val = prov[1];

                    html += '<li class="drop-prov-li" data-val="' + val + '">' + name + '</li>';
                } );

                $this.next().find('.drop-prov-ul').append(html);

				$this.next().find('.drop-prov-ul li').each(function( i ) {
					html = '';

					$.each(self.citys[i], function( i, city ) {

						city = ~city.indexOf('-') ? city.split('-') : [ city, i + 1 ];
						name = city[0];
						val = city[1];

						html += '<li class="drop-city-li" data-val="' + val + '">' + name + '</li>';
					});

					$(this).data('citys', html);

					if( !i ) {
						$this.next().find('.drop-city-ul').html( html );
					}

				});
            });

			$(document).on('click', 'body', function( e ) {
				if( !$(e.target).closest('.address-search-box').length && $('.drop-down:visible').length ) {
					$('.drop-down:visible').prev('.city-select').trigger('click');
				}
			});
        return self;
      },

      eventInit: function() {
            var self = this;

            $(document).on('click', '.city-select', function () {
                var $this = $(this),
                    index = 0;
					// $parents, $value, $hidden;

                $this.next().toggle();

			if( $this.next().is(':visible') && $this.next().find('.selected').length === 2 ) {
				$this.next().find('.selected').each(function() {
					var $selected = $(this),
						scrollTop = $selected.prevAll().length * $selected.outerHeight(true);

					$selected.parent().parent().scrollTop( scrollTop );
				});
			} else {
				$this.next().find('.selected').removeClass('selected');
				$this.next().children().each(function() {
					$(this).scrollTop(0);
				});
				$this.next().find('.drop-city-ul').html( $this.next().children().eq(0).find('li:eq(0)').data('citys') );
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

            }).on('click', '.drop-prov-ul li', function() {
			var $this = $(this),
				$cityWrap;

			if( !$this.hasClass('selected') ) {
				$this.addClass('selected').siblings('.selected').removeClass('selected');

				$cityWrap = $this.parents('.drop-prov').next();
				$cityWrap.find('.drop-ul').html( $this.data('citys') );
			}

		}).on('click', '.drop-city-ul li', function() {
			var $this = $(this),
				$parents, $value, $hidden;

			if( !$this.hasClass('selected') ) {
				$this.addClass('selected').siblings('.selected').removeClass('selected');

				$parents = $this.parents('.address-search-box');
				$value = $parents.find('.value');
				$hidden = $parents.find('input:hidden');

				$this.parents('.drop-down').toggle().find('.selected').each(function( i ) {
					$value.eq( i ).val( $(this).text() );
					$hidden.eq( i ).val( $(this).data('val') )
				});
			}
		})
        return self;
      }
    }
	}
	function stf( s ) {
		return new Function('return ' + s)();
	}
	$(document).ready(function() {
		siteFns.init();
		$('.js-pic-box').click(function(){
        var $this = $(this);
        $this.hasClass('select') ? $this.removeClass('selected') :
        $this.addClass('selected').siblings('li').removeClass('selected');
    });
	});
});
function initGallery( parent ) {
	$('.pic-list a').fancybox({
		parent: parent || null,
		fixed: !parent,
		openEffect  : 'none',
		closeEffect : 'none',
		padding: 0,
		prevEffect : 'none',
		nextEffect : 'none',
		closeBtn  : false,
		helpers : {
			buttons	: {
				show: false
			}
		},
		afterLoad : function() {
			this.title = (this.index + 1) + ' / ' + this.group.length + (this.title ? ' - ' + this.title : '');
		}
	});
}
// 省份
function initSelectBox(){
	var provs = [
		"北京", "天津", "上海", "重庆", "河北", "山西", "内蒙古", "辽宁", "吉林", "黑龙江", "江苏", "浙江", "安徽", "福建", "江西", "山东", "河南", "湖北", "湖南", "广东", "广西", "海南", "四川", "贵州", "云南",
		"西藏", "陕西", "甘肃", "青海", "宁夏", "新疆", "香港", "澳门", "台湾"],
		citys = [
			"北京","天津","上海","重庆","石家庄","张家口", "承德", "秦皇岛",
			"唐山", "廊坊", "保定", "衡水","沧州", "邢台", "邯郸","太原", "朔州",
			"大同", "阳泉", "长治", "晋城", "忻州", "晋中", "临汾","吕梁", "运城",
			"呼和浩特", "包头", "乌海", "赤峰", "通辽", "呼伦贝尔", "鄂尔多斯",
		  "乌兰察布", "巴彦淖尔", "兴安盟", "锡林郭勒盟", "阿拉善盟","沈阳",
			"朝阳", "阜新", "铁岭", "抚顺", "本溪", "辽阳", "鞍山", "丹东", "大连",
			"营口", "盘锦", "锦州", "葫芦岛","长春", "白城", "松原", "吉林", "四平",
			"辽源", "通化", "白山", "延边州","哈尔滨", "齐齐哈尔", "七台河", "黑河",
			"大庆", "鹤岗", "伊春", "佳木斯", "双鸭山","鸡西", "牡丹江", "绥化",
			"大兴安岭","南京", "徐州", "连云港", "宿迁", "淮安", "盐城", "扬州",
			"泰州", "南通", "镇江", "常州", "无锡", "苏州","杭州", "湖州", "嘉兴",
			"舟山", "宁波", "绍兴", "衢州", "金华", "台州", "温州", "丽水","合肥",
			"宿州", "淮北", "亳州", "阜阳", "蚌埠", "淮南", "滁州", "马鞍山",
			"芜湖","铜陵", "安庆", "黄山", "六安", "巢湖", "池州", "宣城","福州",
			"南平", "莆田", "三明", "泉州", "厦门", "漳州", "龙岩", "宁德","南昌",
			"九江", "景德镇", "鹰潭", "新余", "萍乡", "赣州", "上饶", "抚州",
			"宜春", "吉安","济南", "青岛", "聊城", "德州", "东营", "淄博", "潍坊",
			"烟台", "威海", "日照","临沂", "枣庄", "济宁", "泰安", "莱芜", "滨州",
			"菏泽","郑州", "开封", "三门峡", "洛阳", "焦作", "新乡", "鹤壁",
			"安阳", "濮阳", "商丘", "许昌", "漯河", "平顶山", "南阳","信阳",
			"周口", "驻马店", "济源","武汉", "十堰", "襄阳", "荆门", "孝感",
			"黄冈", "鄂州", "黄石", "咸宁", "荆州", "宜昌", "随州", "仙桃",
			"潜江", "天门", "神农架林区", "恩施州","长沙", "张家界", "常德",
			 "益阳", "岳阳", "株洲", "湘潭", "衡阳", "郴州", "永州", "邵阳",
			 "怀化", "娄底", "湘西州","广州", "深圳", "清远", "韶关", "河源",
			  "梅州", "潮州", "汕头", "揭阳", "汕尾", "惠州", "东莞", "珠海", "中山", "江门", "佛山", "肇庆", "云浮", "阳江", "茂名", "湛江",
			  "南宁", "桂林", "柳州", "梧州", "贵港", "玉林", "钦州", "北海", "防城港", "崇左", "百色", "河池", "来宾", "贺州",
			  "海口", "三亚", "文昌", "琼海", "万宁", "五指山", "东方", "儋州", "三沙",
			  "成都", "广元", "绵阳", "德阳", "南充", "广安", "遂宁", "内江", "乐山", "自贡", "泸州",
				"宜宾", "攀枝花", "巴中", "达州", "资阳", "眉山", "雅安", "阿坝州", "甘孜州", "凉山州",
			  "贵阳", "六盘水", "遵义", "安顺", "毕节", "铜仁", "黔东南州", "黔南州", "黔西南州",
			  "昆明", "曲靖", "玉溪", "保山", "昭通", "丽江", "思茅", "临沧", "德宏州", "怒江州", "迪庆州", "大理州", "楚雄州", "红河州", "文山州", "西双版纳",
			  "拉萨", "那曲", "昌都", "林芝", "山南", "日喀则", "阿里",
			  "西安", "延安", "铜川", "渭南", "咸阳", "宝鸡", "汉中", "榆林", "安康", "商洛",
			  "兰州", "嘉峪关", "白银", "天水", "武威", "酒泉", "张掖", "庆阳", "平凉", "定西", "陇南", "临夏州", "甘南州",
			  "西宁", "海东", "海北州", "海南州", "黄南州", "果洛州", "玉树州", "海西州",
			  "银川", "石嘴山", "吴忠", "固原", "中卫",
			  "乌鲁木齐", "克拉玛依", "喀什", "阿克苏", "和田", "吐鲁番", "哈密", "克孜勒苏柯州", "博尔塔拉州", "昌吉州", "巴音郭楞州", "伊犁州", "塔城", "阿勒泰",
			  "香港",
			  "澳门",
			  "台北", "高雄", "台中", "花莲", "基隆", "嘉义", "金门", "连江",
				"苗栗", "南投", "澎湖", "屏东", "台东", "台南", "桃园", "新竹",
				"宜兰","云林", "彰化"],
		areas = ["朝阳", "阜新", "铁岭", "抚顺", "本溪", "辽阳", "鞍山", "丹东", "大连",
		"营口", "盘锦", "锦州", "葫芦岛","长春", "白城", "松原", "吉林", "四平",
		"辽源", "通化", "白山", "延边州","哈尔滨", "齐齐哈尔", "七台河", "黑河",
		"大庆", "鹤岗", "伊春", "佳木斯", "双鸭山","鸡西", "牡丹江", "绥化",];

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
