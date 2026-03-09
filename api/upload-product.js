import { createClient } from "@supabase/supabase-js"

export default async function handler(req,res){

if(req.method !== "POST"){
res.status(405).json({error:"Method not allowed"})
return
}

const supabase = createClient(
process.env.SUPABASE_URL,
process.env.SUPABASE_SERVICE_ROLE
)

const { creator_id, name, price, vendor, display, item } = req.body

const { error } = await supabase
.from("products")
.insert({
creator_id: creator_id,
name: name,
price: price,
vendor_id: vendor,
display_box: display,
item_name: item
})

if(error){
res.status(500).json({error:error.message})
return
}

res.json({success:true})

}
