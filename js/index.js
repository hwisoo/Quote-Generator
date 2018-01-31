	$(document).ready(function(){
		var quoteSource=[
		{
			quote: "Start by doing what's necessary; then do what's possible; and suddenly you are doing the impossible.",
			name:"Francis of Assisi"
	    },
	    {
	    	quote:"Believe you can and you're halfway there.",
	    	name:"Theodore Roosevelt"
	    },
	    {
	    	quote:"It always seems impossible until it's done.",
	    	name:"Nelson Mandela"
	    },
	    {
	    	quote:"Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.",
	    	name:"Thomas A. Edison"
	    },
	    {
	    	quote:"Do not go where the path may lead, go instead where there is no path and leave a trail.",
	    	name:"Ralph Waldo Emerson"
	    },
	    {
	    	quote:"Don't watch the clock; do what it does. Keep going.",
	    	name:"Sam Levenson"
	    },
	    {
	    	quote:"Knowing yourself is the beginning of all wisdom.",
	    	name:"Aristotle"
	    },
	    {
	    	quote:"A creative man is motivated by the desire to achieve, not by the desire to beat others.",
	    	name:"Ayn Rand"
	    },
	    {
	    	quote:"Dream as if you'll live forever. Live as if you'll die today.",
	    	name:"James Dean"
	    },
	    {
	    	quote:"Start where you are. Use what you have. Do what you can.",
	    	name:"Arthur Ashe"
	    },
	    {
	    	quote:"Ever tried. Ever failed. No matter. Try Again. Fail again. Fail better.",
	    	name:"Samuel Beckett"
	    },
	    {
	    	quote:"Be yourself; everyone else is already taken.",
	    	name:"Oscar Wilde"
	    },
	    {
	    	quote:"It is not in the stars to hold our destiny but in ourselves.",
	    	name:"William Shakespeare"
	    },
	    {
	    	quote:"Go confidently in the direction of your dreams. Live the life you have imagined.",
	    	name:"Henry David Thoreau"
		},
		{
			quote:"Live your beliefs and you can turn the world around.",
			name:"Henry David Thoreau"
		},
	    {
	    	quote:"I learned that courage was not the absence of fear, but the triumph over it. The brave man is not he who does not feel afraid, but he who conquers that fear.",
	    	name:"Nelson Mandela"
	    },
	    {
	    	quote:"To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
	    	name:"Ralph Waldo Emerson"
	    },
	    {
	    	quote:"I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
	    	name:"Maya Angelou"
	    },
	    {
	    	quote:"The only person you are destined to become is the person you decide to be.",
	    	name:"Ralph Waldo Emerson"
	    },
	    {
	    	quote:"Love many things, for therein lies the true strength, and whosoever loves much performs much, and can accomplish much, and what is done in love is done well.",
	    	name:"Vincent van Gogh"
	    },
	    {
	    	quote:"Great things are done by a series of small things brought together.",
	    	name:"Vincent van Gogh"
	    },
	    {
	    	quote:"One must still have chaos in oneself to be able to give birth to a dancing star.",
	    	name:"Friedrich Nietzsche"
	    },
	    {
	    	quote:"Keep your face always toward the sunshine - and shadows will fall behind you.",
	    	name:"Walt Whitman"
	    },
	    {
	    	quote:"Happiness is not something ready made. It comes from your own actions.",
	    	name:"Dalai Lama"
		},
		{
	    	quote:"Try to be a rainbow in someone's cloud.",
	    	name:"Maya Angelou"
		},
		{
	    	quote:"Wise men speak because they have something to say; Fools because they have to say something.",
	    	name:"Plato"
	    },
		{
			quote:"It is during our darkest moments that we must focus to see the light.",
			name:"Aristotle"
		},
		{
			quote:"The most important thing in life is to learn how to give out love, and to let it come in.",
			name:"Morrie Schwartz"
		},
		{
			quote: "Nothing else in the world... not all the armies... is so powerful as an idea whose time has come.",
			name: "Victor Hugo"
			
		},
		{
			quote: "Perseverance, secret of all triumphs.",
			name: "Victor Hugo"
		
		}
	];
		

		$('#quoteButton').click(function(evt){
			//define the containers of the info we target
			var quote = $('#quoteContainer p').text();
			var quoteGenius = $('#quoteGenius').text();
			//prevent browser's default action
			evt.preventDefault();
			//getting a new random number to attach to a quote and setting a limit
			var sourceLength = quoteSource.length;
			var randomNumber= Math.floor(Math.random()*sourceLength);
			//set a new quote
			for(i=0;i<=sourceLength;i+=1){
			var newQuoteText = quoteSource[randomNumber].quote;
			var newQuoteGenius = quoteSource[randomNumber].name;
			//console.log(newQuoteText,newQuoteGenius);
      var timeAnimation = 500;
      var quoteContainer = $('#quoteContainer');
      //fade out animation with callback
      quoteContainer.fadeOut(timeAnimation, function(){
        quoteContainer.html('');
				quoteContainer.append('<p>'+newQuoteText+'</p>'+'<p id="quoteGenius">'+'-								'+newQuoteGenius+'</p>');
        
        //fadein animation.
        quoteContainer.fadeIn(timeAnimation);
      });  
			
			break;
		};//end for loop
	
	});//end quoteButton function
		
		
});//end document ready