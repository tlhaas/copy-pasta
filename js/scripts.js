window.addEventListener('load', function() {
	var button = document.createElement("button");
	button.textContent = "Copy Address";
	button.id = "taco-button";
	button.addEventListener("click", () => writeClipboardText());
	document.getElementsByClassName("address-compact")[0].appendChild(button);
});

async function writeClipboardText() {
	var text = getAddress();
	try {
		await navigator.clipboard.writeText(text);
	} catch (error) {
		console.error(error.message);
	}
}

function getAddress()
{
  	var addressDiv = document.getElementsByClassName("address-compact")[0].getElementsByTagName("div")[0].children;
	  
	// first child is always the name 	
  	var name = addressDiv[0].textContent.trimStart(); 
  	
  	var addressPieces = addressDiv[1].children; // collection
  	var numAddressPieces = addressPieces.length;
	var lastInArray = numAddressPieces - 1;
  
  	var fullAddress = name + "\n";

  	// rest of children are the address
  	// the last child is alway `city, state zip` in a mess of span's
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