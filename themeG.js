window.onload = ()=>{
  
  window.onscroll = function() {myFunction()};

  function myFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      document.querySelector('nav').classList.add("nav-scroll");

    } else {
      document.querySelector('nav').classList.remove("nav-scroll");
    }
  }

const home = document.createElement("div")
const trade = document.createElement("div")
const farms = document.createElement("div")
const gigapool = document.createElement("div")
const github = document.createElement("div")
const docs = document.createElement("div")
const drop = document.createElement('div')

const homel = document.createElement("a")
const tradel = document.createElement("a")
const farmsl = document.createElement("a")
const gigapooll = document.createElement("a")
const githubl = document.createElement("a")
const docsl = document.createElement("a")

 homel.innerHTML= 'Top100'
 tradel.innerHTML= 'Trade'
 farmsl.innerHTML= 'Farms'
 gigapooll.innerHTML= 'GigaPool'
 githubl.innerHTML= 'Github'
 docsl.innerHTML= 'White Paper'

 homel.setAttribute("href", "https://glenty.com/top100")
 tradel.setAttribute("href", "https://exchange.glenty.com/#/swap")
 farmsl.setAttribute("href", "https://glenty.com/farms")
 gigapooll.setAttribute("href", "https://giga.glenty.com")
 githubl.setAttribute("href", "https://github.com/glenty-protocol")
 docsl.setAttribute("href", "./Glenty Index Token.pdf")
 docsl.setAttribute("target", "_blank")

 homel.setAttribute("class", "nav-links")
 tradel.setAttribute("class", "nav-links")
 tradel.setAttribute("class", "nav-links")
 farmsl.setAttribute("class", "nav-links")
 gigapooll.setAttribute("class", "nav-links")
 githubl.setAttribute("class", "nav-links")
 docsl.setAttribute("class", "nav-links")


 home.appendChild(homel)
 trade.appendChild(tradel)
 trade.appendChild(drop)
 farms.appendChild(farmsl)
 gigapool.appendChild(gigapooll)
 github.appendChild(githubl)
 docs.appendChild(docsl)
 const heade = document.createElement('div')
 const nav = document.querySelector('nav')

 heade.appendChild(trade)
 heade.appendChild(farms)
 heade.appendChild(home)
 heade.appendChild(gigapool)
 heade.appendChild(github)
 heade.appendChild(docs)
 heade.classList.add('header-grid')

 nav.insertBefore(heade, nav.childNodes[1])
 document.querySelector('#root div').querySelectorAll('div')[12].style.background='transparent';
 document.querySelector('#root div').querySelectorAll('div')[14].style.background='transparent';
 const socialL = document.querySelector('#root div').querySelectorAll('div')[18]
 socialL.classList.add('socialL');
  document.querySelector('#root').appendChild(document.querySelector('.socialL').parentElement);
 
/*document.querySelector('button').remove();*/


document.querySelector('.searchInputG').addEventListener('keyup',function(){
  const searchbox = document.querySelector('input.searchInputG');
  const Cnames = document.querySelector('.grid-Gigapool').childNodes
  for(let i =0; i < Cnames.length; i++){
    Cnames[i].querySelector('.nameCont').innerText.toLowerCase().includes(searchbox.value.toLowerCase())?Cnames[i].style.display='':Cnames[i].style.display='none'
  }
  })
  document.querySelector('.searchInputO').addEventListener('keyup',function(){
    const searchbox = document.querySelector('input.searchInputO');
    const Cnames = document.querySelector('.grid-Out').childNodes
    for(let i =0; i < Cnames.length; i++){
      Cnames[i].querySelector('.nameCont').innerText.toLowerCase().includes(searchbox.value.toLowerCase())?Cnames[i].style.display='':Cnames[i].style.display='none'
    }
    })
      document.querySelector('svg').parentElement.addEventListener('click',function(){
        window.location.replace("http://glenty.com");
      })
}

function mobileC(){
  window.onload = ()=>{
/*nav*/
  document.querySelector('nav').style.border='none';
 
  window.onscroll = function() {hideNav()};

  function hideNav() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      document.querySelector("nav").style.display = "none";
    } else {
      document.querySelector("nav").style.display = "flex";
    }
  }
  let phonePrice = document.createElement('div');
  document.querySelector('nav').insertBefore(phonePrice, document.querySelector('nav').childNodes[1]);
  document.querySelectorAll('div')[8].querySelector('button').click()
  phonePrice.classList.add('phonePrice');
  setInterval(function(){
    document.querySelector('.price')?phonePrice.innerText=document.querySelector('.price').innerText:false;
  },3000)
  
}
  function createFooter(){
    /*footer*/
    const fixedFooter = document.createElement('div');
    fixedFooter.classList.add('fixedFooter'); 
    const TradeM = document.createElement('a');
    const gigapoolM = document.createElement('a');
    const Top100M = document.createElement('a');
    const MoreM = document.createElement('a');
  
    TradeM.classList.add('footerLinks');
    Top100M.classList.add('footerLinks');
    MoreM.classList.add('footerLinks');
    gigapoolM.classList.add('footerLinks');
    gigapoolM.classList.add('activeFooter');
  
  
    TradeM.setAttribute('href','https://exchange.glenty.com/#/swap');
    Top100M.setAttribute('href','https://glenty.com/top100');
    gigapoolM.setAttribute('href','https://giga.glenty.com/');
  
  
    const tradeImg = document.createElement('img');
    const top100Img = document.createElement('img');
    const moreImg = document.createElement('img');
    const gigapoolImg = document.createElement('img');
  
  
    tradeImg.setAttribute('src','./images/trade.svg');
    top100Img.setAttribute('src','./images/TOP100-Icon.svg');
    moreImg.setAttribute('src','./images/more.svg');
    gigapoolImg.setAttribute('src','./images/gigapool.svg');
  
  
    tradeImg.classList.add('footerImg');
    top100Img.classList.add('footerImg');
    moreImg.classList.add('footerImg');
    gigapoolImg.classList.add('footerImg');
  
  
    const tradeT = document.createElement('p');
    const top100T = document.createElement('p');
    const moreT = document.createElement('p');
    const gigapoolT = document.createElement('p');
  
  
    tradeT.innerText='Trade';
    top100T.innerText='Top100';
    moreT.innerText='More';
    gigapoolT.innerText='Gigapool';
  
  
  
    TradeM.appendChild(tradeImg);
    Top100M.appendChild(top100Img);
    MoreM.appendChild(moreImg);
    gigapoolM.appendChild(gigapoolImg);
  
  
    TradeM.appendChild(tradeT);
    Top100M.appendChild(top100T);
    MoreM.appendChild(moreT);
    gigapoolM.appendChild(gigapoolT);
  
  
  
    fixedFooter.appendChild(TradeM);
    fixedFooter.appendChild(gigapoolM);
    fixedFooter.appendChild(Top100M);
    fixedFooter.appendChild(MoreM);
    document.querySelector('body').appendChild(fixedFooter);
    document.querySelector('#root').addEventListener('click',function(){
    document.querySelector('.moreMenu').style.display='none'
    })
    }
  
  function createMenuFooter(){
    /*footer*/
    const fixedMenuFooter = document.createElement('div');
    fixedMenuFooter.classList.add('moreMenu'); 
    const docsM = document.createElement('a');
    const githubM = document.createElement('a');
    const FarmsM = document.createElement('a');
  
  
  
    docsM.classList.add('moreLinks');
    githubM.classList.add('moreLinks');
    FarmsM.classList.add('moreLinks');
  
  
    githubM.setAttribute('href','https://github.com/glenty-protocol');
    docsM.setAttribute('href','./Glenty Index Token.pdf');
    FarmsM.setAttribute('href','https://glenty.com/farms');
  
  
    const githubImg = document.createElement('img');
    const docsImg = document.createElement('img');
    const farmsImg = document.createElement('img');
  
  
    docsImg.setAttribute('src','./images/DOCS.svg');
    farmsImg.setAttribute('src','./images/farms.svg');
    githubImg.setAttribute('src','./images/GITHUB.svg');
  
    docsImg.classList.add('footerImg');
    farmsImg.classList.add('footerImg');
    githubImg.classList.add('footerImg');
  
    const githubT = document.createElement('p');
    const docsT = document.createElement('p');
    const farmT = document.createElement('p');
  
    githubT.innerText='Github';
    docsT.innerText='White Paper';
    farmT.innerText='Farms';
  
  
    githubM.appendChild(githubImg);
    docsM.appendChild(docsImg);
    FarmsM.appendChild(farmsImg);
  
  
    githubM.appendChild(githubT);
    docsM.appendChild(docsT);
    FarmsM.appendChild(farmT);
  
    /*style*/
    /*fixedMenuFooter.style.borderTop='3px solid #989fac';*/
    fixedMenuFooter.style.borderBottom='3px solid #989fac';
    docsM.style.borderBottom='none';
  
    fixedMenuFooter.appendChild(FarmsM);
    fixedMenuFooter.appendChild(githubM);
    fixedMenuFooter.appendChild(docsM);
  
    document.querySelector('#root').appendChild(fixedMenuFooter);
  
  }
  
  window.addEventListener('load', function () {
    createFooter();
    createMenuFooter();    
    document.querySelectorAll('.footerLinks')[3].addEventListener('click',function(){
      document.querySelector('.moreMenu').style.display === "grid"? 
      document.querySelector('.moreMenu').style.display='none':
      document.querySelector('.moreMenu').style.display='grid'
    })
    document.querySelector('.searchInputG').addEventListener('keyup',function(){
      const searchbox = document.querySelector('input.searchInputG');
      const Cnames = document.querySelectorAll('.grid-Gigapool .coincont .coin')
      for(let i =0; i < Cnames.length; i++){
        Cnames[i].querySelectorAll('div')[1].innerText.toLowerCase().includes(searchbox.value.toLowerCase())?Cnames[i].parentElement.style.display='':Cnames[i].parentElement.style.display='none'
      }
      })
      document.querySelector('.searchInputO').addEventListener('keyup',function(){
        const searchbox = document.querySelector('input.searchInputO');
        const Cnames = document.querySelectorAll('.grid-Out .coincont .coin')
        for(let i =0; i < Cnames.length; i++){
          Cnames[i].querySelectorAll('div')[1].innerText.toLowerCase().includes(searchbox.value.toLowerCase())?Cnames[i].parentElement.style.display='':Cnames[i].parentElement.style.display='none'
        }
        })
  })
}
window.innerWidth < 900 ? mobileC() : false

const windowWidth = window.innerWidth

window.onresize = ()=>{
  window.innerWidth !== windowWidth ? location.reload():false
}

setTimeout(function(){
  document.querySelector('a').removeAttribute('href');
  document.querySelector('a').style.cursor='pointer';
  document.querySelector('a').addEventListener('click',function(){
    window.location.replace('https://glenty.com')
  })
},7000)