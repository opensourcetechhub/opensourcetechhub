layouts['preview'] = 'getPreviewLayout';

function getPreviewLayout(id, preview, size) {
	var previewLayout = '';
    var detailSize = 12;
	previewLayout += '<div class="col-lg-'+size+'">';
	previewLayout += '	<div class="row">';
    if(preview.cover) {
	previewLayout += '		<div class="col-lg-3">';
	previewLayout += '			<img class="" src="' + preview.cover + '">';
	previewLayout += '		</div>';
    detailSize = 9;
    }
	previewLayout += '		<div class="col-lg-' + detailSize + ' card">';
	previewLayout += '			<div class="card-body">';
	name =           '			<h4 class="card-title mb-3">' + preview.name + '</h4>';
	if(preview.link || preview.detail) {
    link = preview.link || '../' + app + '/' + referer + '?wd=' + preview.detail;
	previewLayout += '			<a target="_blank" href="' + link + '">' + name + '</a>';
	} else {
	previewLayout += name;
	}
	previewLayout += '				<p class="card-text">' + preview.desc + '</p>';
	previewLayout += '			</div>';
	previewLayout += '		</div>';
	previewLayout += '	</div>';
	previewLayout += '</div>';
	return previewLayout;	
}