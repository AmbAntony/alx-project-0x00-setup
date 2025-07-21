import Card from "@/components/Card"
import Button from "@/components/Button"


const Landing: React.FC =  () => {
  return (
    <div>
      <h1 className=" text-xl font-extralight">Landing Page</h1>
      <Card /> 
      <Card />
      <Card />
    

      <h1 className="text-2xl font-bold">Custom Button Variants</h1>

     
        {/* Small */}
        <Button title="Small / Rounded-sm" size="small" shape="rounded-sm" />
      

        {/* Medium */}
        <Button title="Medium / Rounded-sm" size="medium" shape="rounded-sm" />
       

        {/* Large */}
        <Button title="Large / Rounded-sm" size="large" shape="rounded-sm" />
  
    </div>

  )
}
export default Landing