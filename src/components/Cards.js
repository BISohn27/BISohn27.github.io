export default function Cards({path}){
    return(
        <div style={{ width: '100%', height: '65vh', display:"flex",justifyContent:"center", alignItems:"center", }}>
                <img src={path} alt={path} width="90%" height="100%" style={{objectFit:"contain",marginLeft:"30px"}}/>
        </div>
    );
};