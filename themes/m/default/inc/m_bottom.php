
	</div>
	<div class="web_copy">
		Copyright © <a href="http://webmis.ksphp.com/admin" id="webmisVersion">ksphp.com</a> Tencent. All Rights Reserved
	</div>
	<!-- Index End -->
	<div id="base_url" style="display: none;"><?php echo base_url().$this->config->config['index_url']; ?></div>
	<script language="javascript" src="<?php echo base_url('../themes/m/'.$this->config->config['m_themes'].'/m.js');?>"></script>
<?php if(@$LoadJS){ foreach($LoadJS as $val){ ?>
	<script language="javascript" src="<?php echo base_url('../themes/m/'.$this->config->config['m_themes'].'/js/'.$val); ?>"></script>
<?php }}?>
</body>
</html>