document.addEventListener('DOMContentLoaded', () => {
    let tl = new TimeLineMax();
    //        class     tempo    from            {to                transição}
    tl.fromTo('.bg-loader', 1, {width: '100%'}, {width: '0%', ease: Expo.easeInOut});
}); 