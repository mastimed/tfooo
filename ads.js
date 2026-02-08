// Kidgas ad loader (AdSense placeholders)
// Replace ca-pub-XXXXXXXXXXXXXXX and data-ad-slot values with your own.
// Keep AdSense-compliant: no deceptive placement, no forced clicks, keep spacing from game controls.
(function(){
  const ADS_ENABLED = false; // set true after AdSense approval
  if(!ADS_ENABLED){
    document.addEventListener('DOMContentLoaded', ()=> {
      document.querySelectorAll('.ad-slot').forEach(el => el.style.display='none');
    });
    return;
  }

  const script=document.createElement('script');
  script.async=true;
  script.src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXX';
  script.crossOrigin='anonymous';
  document.head.appendChild(script);

  function pushAds(){
    document.querySelectorAll('ins.adsbygoogle').forEach(()=> {
      try{ (window.adsbygoogle=window.adsbygoogle||[]).push({}); }catch(e){}
    });
  }
  script.addEventListener('load', pushAds);
})();