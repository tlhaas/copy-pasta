function getAddress()
{
  	var fuckingAddressStuff = document.getElementsByClassName("address-compact")[0].getElementsByTagName("div")[0].children;
	  
  	var name = fuckingAddressStuff[0].textContent.trimStart(); // just the text
  	
  	var addressPieces = fuckingAddressStuff[1].children; // collection
  	var numAddressPieces = addressPieces.length;
		var lastInArray = numAddressPieces - 1;
  
  	var fullAddress = name + "\n";

  	for (var i=0; i < numAddressPieces; i++)
  	{
  		if(i != lastInArray)
  		{
  			fullAddress += addressPieces[i].textContent.trimStart() + "\n";
  		}
  		else 
  		{
  			// it's the city, state, zip
  			var spans = addressPieces[i].querySelectorAll("span span");
  			var numSpans = spans.length;
  			var citystatezip = "";
  			for (var j=0; j < numSpans; j++ )
  			{
  				citystatezip += spans[j].textContent;
  			}
  			fullAddress += citystatezip;
  		}
  	}

  	return fullAddress;
}