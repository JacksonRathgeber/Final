

news = {
	news0: {
		"title": "The Flying Spaghetti Monster will Destroy the Earth by 2030, and Economists are Thrilled",
		"date": "February 19, 2026",
		"subtitle": "Global annihilation is expected to raise the prices of housing and basic necessities.",
		"image": "images/monster.jpeg"

	},

	news1: {
		"title": "Random Guy Kicks Baby Because He's an Asshole and Now Everyone Needs to Be Angry",
		"date": "April 14, 2025",
		"subtitle": "Aren't you angry? Don't you hate babies being kicked???",
		"image": "images/kick.jpeg"

	},

	news2: {
		"title": "Man Kills Hundreds with Nuclear Warhead After Neighbor Wished Him A Good Morning",
		"date": "November 22, 2024",
		"subtitle": "The football star has been sentenced to 6 months probation to avoid damaging his record.",
		"image": "images/nuke.jpeg"

	},

	news3: {
		"title": "puppies puppies look at the puppies cute puppies don't think JUST LOOK AT THE PUPPIES",
		"date": "August 8, 2024",
		"subtitle": "aww such cute puppies don't think don't think don't think don't think",
		"image": "images/puppies.jpeg"

	},

	news4: {
		"title": "There's About to Be A Literal Genocide.",
		"date": "September 28, 2027",
		"subtitle": "Here are some facts you should know before you ignore it.",
		"image": "images/desantis.jpeg"

	},

	news5: {
		"title": "The Only Lipstick that Can Withstand Tear Gas is ON SALE NOW!",
		"date": "March 12, 2024",
		"subtitle": "What's the point of revolution if you can't SLAY in your pictures from it?",
		"image": "images/lipstick.jpg"

	},

	news6: {
		"title": "Fast and Furious 26 is Rumored to Have WOMEN In It, and we SIGMAS Are FURIOUS",
		"date": "June 16, 2025",
		"subtitle": "Goddamn wokeism.",
		"image": "images/ff26.jpg"

	},
}



for(let i=0;i<Object.keys(news).length;i++){

	let data=Object.values(news)[i];
	data=Object.values(data);

	let article=document.createElement("DIV");
	article.classList.add("feedContent");

	let content=document.createElement("DIV");
	content.classList.add("articleContent");

	let img=document.createElement("img");
	img.classList.add("articleImage");
	img.src=data[3];
	article.appendChild(img);

	let title=document.createElement("p");
	title.classList.add("articleTitle");
	title.innerText=data[0];
	
	content.appendChild(title);

	let br3=document.createElement("br");
	content.appendChild(br3);

	let sub=document.createElement("p");
	sub.classList.add("articleText");
	sub.innerText=data[2];
	
	content.appendChild(sub);

	let br=document.createElement("br");
	content.appendChild(br);

	let br2=document.createElement("br");
	content.appendChild(br2);

	let br4=document.createElement("br");
	content.appendChild(br4);


	let date=document.createElement("p");
	date.classList.add("articleText");
	date.innerText=data[1];
	
	content.appendChild(date);

	article.appendChild(content);

	
	let feed;

	if(i==1 || i==3){
		feed=document.getElementById("news1");
	}

	if(i==5 || i==6){
		feed=document.getElementById("news2");
	}

	if(i==0 || i==2 || i==4) {
		feed=document.getElementById("news3");
	}



	if(feed){
			feed.appendChild(article);
		}
		else{
			
		}
}


