/********************************************************************************
** Copyright (c) 2012 Obeo.
** All rights reserved. This program and the accompanying materials
** are made available under the terms of the Eclipse Public License v1.0
** which accompanies this distribution, and is available at
** http://www.eclipse.org/legal/epl-v10.html
**
** Contributors:
**    Stephane Begaudeau (Obeo) - initial API and implementation
*********************************************************************************/
$().ready(function() {
	$("a").bind("click", function(e){
		var properties = {};
		properties["url"] = this.attributes["href"].value;
		chrome.tabs.create(properties, null);
	});
});