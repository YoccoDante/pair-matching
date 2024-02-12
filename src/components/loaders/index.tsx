import './loaderStyles.css'

function LoaderProvider() {
    const loaderStyles = ['triangle', 'scrollTimer', 'sandTimer']
    const styleIndex = Math.floor(Math.random() * loaderStyles.length)
    const currentStyle = `${loaderStyles[styleIndex]}Loader`
  return (
    <div style={{width:'100vw', height:'100vh', display:'flex', justifyContent:'center', alignItems:'center'}}>
      <div className={currentStyle}></div>
    </div>
  )
}

export default LoaderProvider