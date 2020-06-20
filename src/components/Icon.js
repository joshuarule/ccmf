import React, {Fragment} from 'react'



const Instagram = ({width = 40, height = 40, className, style, viewBox = "0 0 67 67"}) => (
  <svg className={`${className}`} width={width} height={height} style={style} viewBox={viewBox} xmlns="http://www.w3.org/2000/svg">
    <path
        fill="currentColor"
        fillRule="evenodd"
        d="M42.271 26.578v-.006c.502 0 1.005.01 1.508-.002.646-.016 1.172-.57 1.172-1.217v-2.89c0-.691-.547-1.24-1.236-1.241h-2.883a1.234 1.234 0 00-1.236 1.243c-.001.955-.004 1.91.003 2.865a1.4 1.4 0 00.073.426c.173.508.639.82 1.209.823l1.39-.001zM33 27.817a6.181 6.181 0 00-.142 12.361c3.454.074 6.248-2.686 6.321-6.043.075-3.46-2.717-6.32-6.179-6.318zm-11.954 3.299v13.627c0 .649.562 1.208 1.212 1.208h21.479c.656 0 1.215-.557 1.215-1.212V31.117H42.04a9.545 9.545 0 01.376 4.014c-.161 1.363-.601 2.631-1.316 3.803s-1.644 2.145-2.779 2.918a9.482 9.482 0 01-9.946.428c-1.579-.885-2.819-2.12-3.685-3.713-1.289-2.373-1.495-4.865-.739-7.451h-2.905zm24.159 18.139c.159-.026.318-.049.475-.083 1.246-.265 2.264-1.304 2.508-2.557.025-.137.045-.273.067-.409V21.794c-.021-.133-.04-.268-.065-.401a3.301 3.301 0 00-2.78-2.618c-.058-.007-.113-.02-.17-.03H20.761c-.147.027-.296.047-.441.08a3.29 3.29 0 00-2.545 2.766c-.008.057-.02.114-.029.171V46.24c.028.154.05.311.085.465a3.302 3.302 0 002.77 2.52c.064.008.13.021.195.03h24.409zM33 64C16.432 64 3 50.568 3 34 3 17.431 16.432 4 33 4s30 13.431 30 30c0 16.568-13.432 30-30 30z"
        clipRule="evenodd"
    ></path>
  </svg>
)

const Facebook = ({width = 40, height = 40, className, style, viewBox = "0 0 48 48"}) => (
  <svg className={`${className}`} width={width} height={height} style={style} viewBox={viewBox} xmlns="http://www.w3.org/2000/svg">

    <circle cx="24" cy="24" r="24" fill="currentColor"></circle>
    <path
        fill="#000"
        d="M29.9 19.5h-4v-2.6c0-1 .7-1.2 1.1-1.2h2.8v-4.4h-3.9c-4.4 0-5.3 3.3-5.3 5.3v2.9h-2.5V24h2.5v12.7h5.3V24h3.6l.4-4.5z"
    ></path>
  </svg>
)

const Email = ({width = 40, height = 40, className, style, viewBox = "0 0 98 98"}) => (
  <svg className={`${className}`} width={width} height={height} style={style} viewBox={viewBox} xmlns="http://www.w3.org/2000/svg">
    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="noun_Mail_1058930" fillRule="nonzero">
            <path d="M49,0 C21.9,0 0,21.9 0,49 C0,76.1 21.9,98 49,98 C76.1,98 98,76.1 98,49 C98,21.9 76.1,0 49,0 Z" id="Path" fill="currentColor"></path>
            <path d="M76,68.8 C76,69.1 75.8,69.3 75.5,69.3 L22.5,69.3 C22.2,69.3 22,69.1 22,68.8 L22,32 C22,31.6 22.5,31.4 22.8,31.6 L48.7,53.1 C48.9,53.2 49.1,53.2 49.3,53.1 L75.2,31.6 C75.5,31.4 76,31.6 76,32 L76,68.8 Z" id="Path" fill="#000"></path>
            <path d="M22.5,28.7 L75.4,28.7 C75.8,28.7 76,29.3 75.7,29.5 L49.3,51.6 C49.1,51.7 48.9,51.7 48.7,51.6 L22.2,29.5 C21.9,29.3 22.1,28.7 22.5,28.7 Z" id="Path" fill="#000"></path>
        </g>
    </g>
  </svg>
)

const icons = {
  'facebook': Facebook,
  'instagram': Instagram,
  'email': Email
}

export default (props) => {
  return (
    <Fragment>
      {icons[props.name](props)}
    </Fragment>
  )
}