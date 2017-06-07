/**
 * GB
 * @name CustomUtils.savedSearchToJSON
 * @param searchAsString - String the internal name of a Custom Search
 * @desc Executes the saved search param and returns the results as JSON
 */
function savedSearchToJSON(searchAsString) {
	var searchEntity = getSavedSearchEntity(searchAsString);
	var columnHeaders = searchEntity.getColumnHeaders();
	var columnAttributes = searchEntity.getColumnAttributes();

	var resultArray = [];
	var searchResults = getSearchResults(searchEntity);
	eachElement(searchResults.elements(), function(currentEntity) {
		var entityObject = {};
		for (var i=0; i<columnHeaders.length;i++) {
			if (columnAttributes[i] === "_identity_") {
				entityObject[columnHeaders[i]] = "<a href='"+currentEntity.getUrl()+"'>" + (currentEntity.name || currentEntity.id) +"</a>";
			} else {
				entityObject[columnHeaders[i]] = currentEntity.getQualifiedAttribute(columnAttributes[i]);
			}
		}
		resultArray.push(entityObject);
	});
}

function getSavedSearchEntity(searchAsString) {
	var setSavedSearch = ApplicationEntity.getResultSet('SavedSearch').query("name = '" + searchAsString + "'").elements();
	if (setSavedSearch.count() === 0) {
		throw (new Error(-1, "CustomUtils.savedSearchToJSON failed: Search " + searchAsString + " not found."));
	}
	return setSavedSearch.item(1);
}

function getSearchResults(searchEntity) {
	return SearchSupport.performSearchEx(null, searchEntity, false);
}

function eachElement(collection, fn) {
  for (var i=1, count=collection.count();i<=count;i++) {
    fn(collection.item(i));
  }
}
