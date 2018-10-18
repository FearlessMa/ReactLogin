
export function test(req,res){
    console.log(req.body);
    res.send('/users');
}