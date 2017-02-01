function LoadAdditionalData()
{
    //create the queryUrl to be used in the service call
    var query = "https://valdiss.github.io/jsonP-J/ParcsEtJardins.json";
    var filter = "";
    var queryUrl = query + filter;
    //make jquery call to service
    $.getJSON(queryUrl, null, AdditionalData_Loaded);
}
