$(function(){

	var len_ts=ts.worklist.length;
	for (var i = 0; i < len_ts; i++) {
		var len_list=ts.worklist[i].list.length;
		var list_year=ts.worklist[i].year;
		var timestamp=`
			<div class="worklist">
				<h2><a href="#">`+list_year+`年<i></i></a></h2>
				<div class="list">
					<ul>
					</ul>
				</div>
			</div>`;
		$('.listwrap').append(timestamp);
		// 添加子列表
		for (var j = 0; j < len_list; j++) {
			var list_date=ts.worklist[i].list[j].date;
			var list_title=ts.worklist[i].list[j].title;
			var list_version=ts.worklist[i].list[j].version==""?'&nbsp;':ts.worklist[i].list[j].version;
			var list_description=ts.worklist[i].list[j].description;
			var list_highlight=ts.worklist[i].list[j].highlight;
			console.log(list_date,list_title,list_version,list_description,list_highlight);

			var worklist=`
				<li class="cls">
					<p class="date">`+list_date+`</p>
					<p class="title">`+list_title+`</p>
					<p class="version">`+list_version+`</p>
					<div class="description">
						<p>`+list_description+`</p>
					</div>
				</li>`;
			$('.list').eq(i).find('ul').append(worklist);
			if (list_highlight==1) {
				$('.list').eq(i).find('ul li').eq(j).addClass('highlight');
			}
		}
	}

	$(".worklist .list").each(function(e, target){
		var $target=$(target),$ul = $target.find("ul");
		$target.height($ul.outerHeight()), $ul.css("position", "absolute");
	}); 
	$(".worklist>h2>a").click(function(e){
		e.preventDefault();
		$(this).parents(".worklist").toggleClass("close");
	});

	for (var i = 1; i <= $('.nav a').length; i++) {
		if ($('.nav a:nth-child('+i+')').has('i')) {
			$('.nav a').eq(i).find('i:after').css('content',$('.nav a').eq(3).find('i').data('tip'));
			console.log(666);
		}
	}
});