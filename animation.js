$(document).ready(function()
{
    $("#part_2").children().hide();

    setInterval(function()
    {
        AnimateOnScroll("#part_2");
        AnimateOnScroll("#part_3");

    }, 200);
});

function progressBarManager(pbar, maxval)
{
    let minval = 0;
    $(pbar).attr("value", minval);
    let minterval = setInterval(function()
    {
        if(pbar.is(":visible"))
        {
            console.log("called 3");
            if(minval <= maxval)
            {
                pbar.attr("value", minval);
                minval++;
            }
            else 
            {
                clearInterval(minterval);
            }
        }
    }, 10);
}

function ScrollTo(id)
{
    pos = $(id).offset().top;
    $('html, body').animate(
    {
        scrollTop: $(id).offset().top
    }, 1000);
}

function AnimateOnScroll(id)
{
    if($('html, body').scrollTop() >= ($(id).offset().top - 300))    
    {
        if(!$(id).children().is(":visible"))
        {
            if(id == "#part_2")
            {
                for(let i = 1; i <= 6; i++)
                {
                    progressBarManager($(".p"+i), $(".p"+i).get(0).id);
                }
            }
            $(id).children().fadeIn();
        }
    }
    else
    {
        $(id).children().fadeOut();
        if(id == "#part_2")
        {
            for(let i = 1; i <= 6; i++)
            {
                progressBarManager($(".p"+i), "0");
            }
        }
    }
}