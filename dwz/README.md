<div class="panel panel-default">
	<div class="panel-heading">美文欣赏</div>
	<div class="panel-body">
		<p><script charset="utf-8" type="text/javascript" src="https://likinming.com/content/plugins/kl_data_call/kl_data_call_do.php?ID=2"></script></p>
	</div>
</div>
<div class="panel panel-default">
	<div class="panel-heading">短网址API接口文档</div>
	<div class="panel-body">
		<ol>
			<li><a href="#make">短网址生成</a></li>
			<li><a href="#un">短网址还原</a></li>
			<li><a href="#more">网页小工具</a></li>
		</ol>
		<h3 id="make">生成短网址</h3>
		<li>接口地址：https://apis.eps.gs/make.php</li>
		<li>请求方式：GET</li>
		<li>响应：（json）</li>
		<pre>
			<xmp>
				{"url_short":"","url_long":"","error":"0"}
				##url_short为生成后的短网址，url_long为原先的长网址
			</xmp>
		</pre>
		<li>提交参数：（GET提交）</li>
		<li>url （为原先的长网址）</li>
		<li>返回参数（json返回）：</li>
		<li>url_short （生成后的短网址）</li>
		<li>url_long （为原先的长网址）</li>
		<li>error（正确返回0，如出错返回错误代码）</li>
		<li>PS:当error为0时，表明生成成功，如返回其他字符，表示错误代码</li>
		<h4>php生成示例：</h4>
		<pre>
			<xmp>
				<?php $return=file_get_contents('https://apis.eps.gs/make.php?url=长网址');
				$result=json_decode($return); //转化为数组 
				echo $result->url_short; //显示短网址
			</xmp>
		</pre>
		<h3 id="un">还原短网址</h3>
		<li>接口地址：https://apis.eps.gs/un.php</li>
		<li>请求方式：GET</li>
		<li>响应：（json） </li><!--
		<pre>
			<xmp>
				{"url_short":"","url_long":"","error":"0"}
				##url_short为还原前的短网址，url_long为还原后的长网址
			</xmp>
		</pre>-->
		```C
		{"url_short":"","url_long":"","error":"0"}
				##url_short为还原前的短网址，url_long为还原后的长网址
		```
		<li>提交参数：（GET提交）</li>
		<li>url （还原前的短网址）</li>
		<li>返回参数（json返回）：</li>
		<li>url_short （还原前的短网址）</li>
		<li>url_long （还原后的长网址）</li>
		<li>error（正确返回0，如出错返回错误代码）</li>
		<li>PS:当error为0时，表明生成成功，如返回其他字符，表示错误代码</li>
		<h4>php生成示例：</h4><!--
		<pre>
			<xmp>
				<?php $return=file_get_contents('https://apis.eps.gs/un.php?url=短网址');
				$result=json_decode($return); //转化为数组 
				echo $result->url_long; //显示还原后的长网址
			</xmp>
		</pre>-->
		```C
		<?php $return=file_get_contents('https://apis.eps.gs/un.php?url=短网址');
				$result=json_decode($return); //转化为数组 
				echo $result->url_long; //显示还原后的长网址
		```
		<h3 id="more">网站随意调用短网址生成功能：</h3>
		<pre>
			<xmp>
				<iframe width="100%" height="250" frameborder="no" scrolling="no" src="https://apis.eps.gs/dwz.php">
				</iframe>
			</xmp>
		</pre>
	</div>
</div>