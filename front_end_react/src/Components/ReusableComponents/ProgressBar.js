import '../../Styles/ResuableComponent.scss';

function Progressbar({paddind_val=`0.3rem`,span__value=4}){
    
    const getvalue=(inx)=>{
    
    if(inx<=span__value){
        return `#544439`;
    }
    else{
        return `#E0E0E0`;
    }

  };

return(
    <div className="Progress__container">
   {Array(5).fill(0).map((_,i)=>i+1).map((inx)=><span style={{backgroundColor:getvalue(inx),padding:`${paddind_val}`}} ></span>)}
   </div>
);
}

export default Progressbar;