
function Block1(){

    return(
        <div id='wrapper' style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', height: '620px', backgroundColor: '#FCE38A'}}>
            <div id='wrap-text' style={{maxWidth: '450px'}}>
                <h2>Веломастерская "Велозар"</h2>
                <p>Мы, мастера веломастерской "Велозар", как раз те самые счастливые люди, которые смогли превратить своё увлечение и хобби в профессию. Мы сами любим кататься и хотим чтобы Ваш двухколёсный друг приносил Вам только радость и удовольствие от езды.</p>
            </div>
            <img id="img1" src={require('./din 1.jpg')}></img>
        </div>
    )
}

export default Block1