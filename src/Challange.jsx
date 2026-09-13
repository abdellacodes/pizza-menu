
export default function Challange() {
  return (
    <>
      <div>
        <img src="./pizzas/margherita.jpg" alt="profile picures" />
      </div>
      <div> 
         profile cards 

      </div>
      <div><p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. A distinctio dolorem facere minus quasi perferendis exercitationem. Necessitatibus voluptatem ut mollitia ipsam commodi, unde aliquid officiis laborum molestiae eum consequatur dicta. lorem ipsum dolor sit amet lorem ipsum dolor sit amet</p></div>
      <div>
      <h2>this is tshe list of sdkills for the profile owner</h2>
           <ul>
                <Skills skill="HTML"  color="red"/>
                <Skills skill="CSS" color="blue"/>
                <Skills skill="JavaScript" color="green"/>
                <Skills skill="React" color="purple"/>
                <Skills skill="Node.js" color="orange"/>  
           </ul>


      </div>
    
    
    </>
  )


}


function Skills({skill, color}) {
  return (
     <li style={{ backgroundColor: color }}>{skill}</li>
  )
}