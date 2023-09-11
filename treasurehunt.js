const treasure = (location) => {
    const setEmoji = (id, emoji, size = "100px") => {
        const element = document.getElementById(id);
        element.innerHTML = emoji;
        element.style.fontSize = size;
    }
    
    if(location === Math.floor(Math.random() * 10)){
        setEmoji(Math.floor(Math.random() * 10), "👑");
        alert ("You Win!");
    }
    else if(location ===Math.floor(Math.random() * 10)){
        setEmoji(Math.floor(Math.random() * 10), "🔑");
    }
    else if(location ===Math.floor(Math.random() * 10)){
        setEmoji(Math.floor(Math.random() * 10), "💣");
        alert ("You're Dead!");
    }
    else if(location === Math.floor(Math.random() * 10)){
        setEmoji(Math.floor(Math.random() * 10), "🔑");
    }
    else if(location === Math.floor(Math.random() * 10)){
        setEmoji(Math.floor(Math.random() * 10), "💣");
        alert ("You're Dead!");
    }
    else if(location === Math.floor(Math.random() * 9)){
        setEmoji(Math.floor(Math.random() * 9), "🔑");
    } 
    else if(location === Math.floor(Math.random() * 9)){
        setEmoji(Math.floor(Math.random() * 9), "💣");
        alert ("You're Dead!");
    }
    else if(location === Math.floor(Math.random() * 9)){
        setEmoji(Math.floor(Math.random() * 9), "🔑");
    }
    else if(location === Math.floor(Math.random() *9)){
        setEmoji(Math.floor(Math.random() * 9), "💣");
        alert ("You're Dead!");
    }
}