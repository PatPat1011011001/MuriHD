@keyframes slider {

0%{
    left: 0;
}
20%{
    left: 0;
}
25%{
    left: -100%;
}
45%{
    left: -100%;
}
50%{
    left: -200%;
}
70%{
    left: -200%;
}
75%{
    left: -300%;
}
95%{
    left: -300%;
}
100%{
    left: -400%;
}

#slider{
    overflow: hidden;
}
#slider figure img{
    width: 20%;
    float: left;
}
#slider figure {
    position: relative;
    width: 500%;
    margin: 0;
    left: 0;
    text-align: left;
    font-size: 0;
    animation:20s slider infinite;
}
}