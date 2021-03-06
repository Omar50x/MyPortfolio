import { createElement } from 'react';
import './Blog.css';
import Footer from "./Footer";
import Nav from "./Nav";
import 'animate.css';
import {useState} from 'react'
import Main from './Main';

function Blog(){
    const [html , setHtml] = useState(false)
    function htmlF(){
        setHtml(
            !html
        )
    }
    const [css , setCss] = useState(false)
    function cssF(){
        setCss(
            !css
        )
    }
    const [js , setJs] = useState(false)
    function jsF(){
        setJs(
            !js
        )
    }
    const [bootstrap , setBootstrap] = useState(false)
    function bootstrapF(){
        setBootstrap(
            !bootstrap
        )
    }
    const [jquery , setJquery] = useState(false)
    function jqueryF(){
        setJquery(
            !jquery
        )
    }
    const [react , setReact] = useState(false)
    function reactF(){
        setReact(
            !react
        )
    }

    return <>
        <div className="bg-nav">
           <Nav/>
        </div>
        <div className='blog'>
        <div className="container">
        <div className="row my-5">
              <div className="col-md-6 mt-5">
                <div className="row">
                  <div className="col-md-1">
                    <hr className='hr-contact' />
                  </div>
                  <div className="col-md-11">
                    <h4 className='say-hello'>Basic Technologies for Web Development <img src="img/main-pic-1.png" alt="" width={30} /></h4>
                  </div>
                </div>
                <div>
                  <h2 className='lets-work'>Discover and have fun.</h2>
                </div>
              </div>
              <div className="col-md-6 d-flex justify-content-center">
                <img src="img/2un9.gif" alt="" width="350" />
              </div>
            </div>
            <div className="row">
                <div className="col-md-4">
                    <div className='box-html text-center py-5 px-3 animate__animated animate__backInLeft'>
                    <div className="circel-html m-auto d-flex align-items-center justify-content-center mb-3">
                        <img className='' src="img/HTML5_logo_black.svg.png" alt="" width={150} />
                    </div>
                    <div className='mb-4'>
                        <p className='fs-4'>L'HTML est un langage informatique utilis?? sur l'internet. Ce langage est utilis?? pour cr??er des pages web.</p>
                    </div>
                    <div>
                    {
                       html ? 
                       <button onClick={htmlF} className='fs-4 btn-html fw-bold'>Masquer le texte</button>:
                       <button onClick={htmlF} className='fs-4 btn-html fw-bold'>Continuer la lecture</button>
                    }
                    </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className='text-center py-5 px-3 box-css animate__animated animate__backInDown'>
                    <div className="circel-css m-auto d-flex align-items-center justify-content-center mb-3">
                        <img className='' src="img/CSS3_logo_and_wordmark.svg.png" alt="" width={110} />
                    </div>
                    <div className='mb-4'>
                        <p className='fs-4'>Le terme CSS est l'acronyme anglais de Cascading Style Sheets qui peut se traduire par "feuilles de style en cascade". </p>
                    </div>
                    <div>
                    {
                       css ? 
                       <button onClick={cssF} className='fs-4 btn-css fw-bold'>Masquer le texte</button>:
                       <button onClick={cssF} className='fs-4 btn-css fw-bold'>Continuer la lecture</button>
                    }
                    </div>
                    </div>
                </div>
                <div className="col-md-4">
                <div className='text-center py-5 px-3 box-react animate__animated animate__backInRight'>
                    <div className="circel-react m-auto d-flex align-items-center justify-content-center mb-3">
                        <img className='' src="img/React-icon.svg.png" alt="" width={165} />
                    </div>
                    <div className='mb-4'>
                        <p className='fs-4'>React (React.js) est une biblioth??que JavaScript libre d??velopp??e par Facebook depuis 2013.</p>
                    </div>
                    <div>
                    {
                       react ? 
                       <button onClick={reactF} className='fs-4 btn-react fw-bold'>Masquer le texte</button>:
                       <button onClick={reactF} className='fs-4 btn-react fw-bold'>Continuer la lecture</button>
                    }
                    </div>
                    </div>
                </div>
            </div>
            <div className='mt-5'>
            {
                html ? 
                <div className='div-html fs-4 py-3 px-4 text-center animate__animated animate__backInLeft'>
                    <p className='p-html'>L'acronyme signifie HyperText Markup Language, ce qui signifie en fran??ais "langage de balisage d'hypertexte". Cette signification porte bien son nom puisqu'effectivement ce langage permet de r??aliser de l'hypertexte ?? base d'une structure de balisage.
                     Ce n'est pas ?? proprement parl?? un langage de programmation, mais plut??t un langage qui permet de mettre en forme du contenu. Les balises permettent de mettre en forme le texte et de placer des ??l??ments interactif, tel des liens, des images ou bien encore des animations. Ces ??l??ments ne sont pas dans le code source d'une page cod?? en HTML mais "?? cot??" et la page en HTML ne fait que reprendre ces ??l??ments.
                     Pour visualiser une page en HTML il est n??cessaire d'utiliser un navigateur web.
                     La plupart du temps d'autres langages informatique sont associ?? ?? une page cod?? en HTML. Par exemple le CSS, qui permet de mettre en forme le contenu d'une page cod?? en HTML. Il y a ??galement des langage informatique qui d??pendent enti??rement du HTML, tel le Javascript.</p>: 
                </div>:
                <p></p>
            }
            {
                css ? 
                <div className='div-css fs-4 py-3 px-4 text-center animate__animated animate__backInLeft'>
                    <p className='p-css'>Le CSS est un langage informatique utilis?? sur l'internet pour mettre en forme les fichiers HTML ou XML. Ainsi, les feuilles de style, aussi appel?? les fichiers CSS, comprennent du code qui permet de g??rer le design d'une page en HTML.
                     Bien que l'HTML puisse ??tre mis en forme ?? l'aide de balises pr??vus ?? cet effet, de nos jours il est plus judicieux d'utiliser le CSS et de n'utiliser le XHTML que pour le contenu.
                     L'avantage de l'utilisation d'un fichier CSS pour la mise en forme d'un site r??side dans la possibilit?? de modifier tous les titres du site en une seule fois en modifiants une seule partie du fichier CSS. Sans ce fichier CSS, il serait n??cessaire de modifier chaque titre de chaque page du site (difficilement envisageable pour les ??normes sites de plusieurs milliers de pages).
                     D'autres points fort sont perceptible. Il est par exemple possible de cr??er une feuille de style sp??cifique pour l'impression des documents, ce qui permet de retirer tous les effets de style et toutes les parties inutile lors de l'impression. De m??me, une feuille de style peut ??tre utilis??e pour les utilisateurs d'un t??l??phone portable, ce qui permet de mieux g??rer la mise en forme particuli??rement pour les petits ??crans de ces appareils.</p>
                </div>: 
                <p></p>
            }
            {
                react ? 
                <div className='div-react fs-4 py-3 px-4 text-center animate__animated animate__backInLeft'>
                    <p className='p-react'>Le but principal de cette biblioth??que est de faciliter la cr??ation d'application web monopage, via la cr??ation de composants d??pendant d'un ??tat et g??n??rant une page (ou portion) HTML ?? chaque changement d'??tat.
                     React est une biblioth??que qui ne g??re que l'interface de l'application, consid??r?? comme la vue dans le mod??le MVC. Elle peut ainsi ??tre utilis??e avec une autre biblioth??que ou un framework MVC comme AngularJS. La biblioth??que se d??marque de ses concurrents par sa flexibilit?? et ses performances, en travaillant avec un DOM virtuel et en ne mettant ?? jour le rendu dans le navigateur qu'en cas de n??cessit??.
                     La biblioth??que est utilis??e par Netflix3 (c??t?? serveur uniquement depuis le 25 octobre 2017 pour gagner 50 % de performance), Yahoo, Airbnb, Sony, Atlassian ainsi que par les ??quipes de Facebook, pratiquant l'auto??quipement sur le r??seau social ??ponyme, Instagram ou encore WhatsApp. ?? la fin de 2015, WordPress.com annonce Gutenberg, une interface pour les ??diteurs de sites WordPress, d??velopp??e en JavaScript avec Node.js et Reac</p>
                </div>: 
                <p></p>
            }
            </div>
            <div className="row mt-5">
                <div className="col-md-4">
                    <div className='text-center py-5 px-3 box-bootstrap animate__animated animate__backInLeft'>
                    <div className="circel-bootstrap m-auto d-flex align-items-center justify-content-center mb-3">
                        <img className='' src="img/Bootstrap_logo.svg.png" alt="" width={150} />
                    </div>
                    <div className='mb-4'>
                        <p className='fs-4'>Bootstrap est un framework de langage de style CSS d??velopp?? par l'??quipe du r??seau social Twitter.</p>
                    </div>
                    <div>
                    {
                       bootstrap ? 
                       <button onClick={bootstrapF} className='fs-4 btn-bootstrap fw-bold'>Masquer le texte</button>:
                       <button onClick={bootstrapF} className='fs-4 btn-bootstrap fw-bold'>Continuer la lecture</button>
                    }
                    </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className='text-center py-5 px-3 box-jquery animate__animated animate__backInUp'>
                    <div className="circel-jquery m-auto d-flex align-items-center justify-content-center mb-3">
                        <img src="img/download.png" alt="" width={140} />
                    </div>
                    <div className='mb-4'>
                        <p className='fs-4'>jQuery est une biblioth??que JavaScript libre et multiplateforme cr????e pour faciliter l'??criture de scripts.</p>
                    </div>
                    <div>
                    {
                       jquery ? 
                       <button onClick={jqueryF} className='fs-4 btn-jquery fw-bold'>Masquer le texte</button>:
                       <button onClick={jqueryF} className='fs-4 btn-jquery fw-bold'>Continuer la lecture</button>
                    }
                    </div>
                    </div>
                </div>
                <div className="col-md-4">
                <div className='text-center py-5 px-3 box-js animate__animated animate__backInRight'>
                    <div className="circel-js m-auto d-flex align-items-center justify-content-center mb-3">
                        <img className='' src="img/JavaScript-Logo.png" alt="" width={275} />
                    </div>
                    <div className='mb-4'>
                        <p className='fs-4'>Le JavaScript (ou JS) est un langage de programmation informatique utilis?? sur les pages web.</p>
                    </div>
                    <div>
                    {
                       js ? 
                       <button onClick={jsF} className='fs-4 btn-js fw-bold'>Masquer le texte</button>:
                       <button onClick={jsF} className='fs-4 btn-js fw-bold'>Continuer la lecture</button>
                    }
                    </div>
                    </div>
                </div>
                <div className='mt-5'>
            {
                bootstrap ? 
                <div className='div-bootstrap fs-4 py-3 px-4 text-center animate__animated animate__backInLeft'>
                    <p className='p-bootstrap'>Propos?? en open source (sous licence MIT), ce framework utilisant les langages HTML, CSS et JavaScript fournit aux d??veloppeurs des outils pour cr??er un site facilement. Ce framework est pens?? pour d??velopper des sites avec un design responsive, qui s'adapte ?? tout type d'??cran, et en priorit?? pour les smartphones. Il fournit des outils avec des styles d??j?? en place pour des typographies, des boutons, des interfaces de navigation et bien d'autres encore. On appelle ce type de framework un "Front-End Framework".</p>
                </div>: 
                <p></p>
            }
            {
                jquery ? 
                <div className='div-jquery fs-4 py-3 px-4 text-center animate__animated animate__backInLeft'>
                    <p className='p-jquery'>La premi??re version est lanc??e en janvier 2006 par John Resig.
                     Le but de la biblioth??que ??tant le parcours et la modification du DOM (y compris le support des s??lecteurs CSS 1 ?? 3 et un support basique de XPath), elle contient de nombreuses fonctionnalit??s ; notamment des animations, la manipulation des feuilles de style en cascade (accessibilit?? des classes et attributs), la gestion des ??v??nements, etc. L'utilisation d'Ajax est facilit??e et de nombreux plugins sont pr??sents.
                     Depuis sa cr??ation en 2006 et notamment ?? cause de la complexification croissante des interfaces Web, jQuery a connu un large succ??s aupr??s des d??veloppeurs Web et son apprentissage est aujourd'hui un des fondamentaux de la formation aux technologies du Web. Il est ?? l'heure actuelle la biblioth??que front-end la plus utilis??e au monde (plus de la moiti?? des sites Internet en ligne int??grent jQuery).
                     Cependant, son utilisation devient moins pertinente avec l'??mergence de nouvelles biblioth??ques telles que React (JavaScript) et Vue.js qui la remplacent dans la construction d'Application web monopage.</p>
                </div>: 
                <p></p>
            }
            {
                js ? 
                <div className='div-js fs-4 py-3 px-4 text-center animate__animated animate__backInLeft'>
                    <p className='p-js'>Ce langage ?? la particularit?? de s'activer sur le poste client, en d'autres mots c'est votre ordinateur qui va recevoir le code et qui devra l'ex??cuter. C'est en opposition ?? d'autres langages qui sont activ?? c??t?? serveur. L'ex??cution du code est effectu?? par votre navigateur internet tel que Firefox ou Internet Explorer.
                     L'une des choses primordiale ?? savoir est de bien se rendre compte que le JavaScript n'a aucun rapport avec le Java qui est un autre langage informatique.
                     La particularit?? du JavaScript consiste ?? cr??er des petits scripts sur une page HTML dans le but d'ajouter une petite animation ou un effet particulier sur la page. Cela permet en g??n??ral d'am??liorer l'ergonomie ou l'interface utilisateur, mais certains scripts sont peu utile et servent surtout ?? ajouter un effet esth??tique ?? la page. L'int??r??t du JavaScript est d'ex??cut?? un code sans avoir ?? recharger une nouvelle fois la page.
                     La technique AJAX (Asynchronous Javascript And XML) utilise grandement le JavaScript dans le but d'interagir sur la page de mani??re dynamique.</p>
                </div>: 
                <p></p>
            }
            </div>
            </div>
        </div>
        </div>
        <Main/>
      <div className="our-work text-center">
      <div className="container">
        <div className="main-title mt-5 mb-5 position-relative">
          <img className="mb-4" src="imgs/title.png" alt="" />
          <h2>We Make This</h2>
          <p className="text-black-50 text-uppercase fs-5">Prepare To Be Amazed</p>
        </div>
        <ul className="list-unstyled d-flex justify-content-center mt-5 mb-5">
          <li className="active rounded-pill fs-2">All</li>
          <li className='fs-2'>Design</li>
          <li className='fs-2'>Code</li>
          <li className='fs-2'>Photo</li>
          <li className='fs-2'>App</li>
        </ul>
        <div className="row">
          <div className="col-sm-6 col-md-4 col-lg-3">
            <div className="box mb-3 bg-white" data-work="Application">
              <img className="img-fluid" src="img/work-01.jpg" alt="" />
            </div>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-3">
            <div className="box mb-3 bg-white" data-work="Application">
              <img className="img-fluid" src="img/work-02.jpg" alt="" />
            </div>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-3">
            <div className="box mb-3 bg-white" data-work="Application">
              <img className="img-fluid" src="img/work-03.jpg" alt="" />
            </div>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-3">
            <div className="box mb-3 bg-white" data-work="Application">
              <img className="img-fluid" src="img/work-04.jpg" alt="" />
            </div>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-3">
            <div className="box mb-3 bg-white" data-work="Application">
              <img className="img-fluid" src="img/work-05.jpg" alt="" />
            </div>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-3">
            <div className="box mb-3 bg-white" data-work="Application">
              <img className="img-fluid" src="img/work-06.jpg" alt="" />
            </div>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-3">
            <div className="box mb-3 bg-white" data-work="Application">
              <img className="img-fluid" src="img/work-07.jpg" alt="" />
            </div>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-3">
            <div className="box mb-3 bg-white" data-work="Application">
              <img className="img-fluid" src="img/work-08.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
        <Footer/>
    </>
}
export default Blog;