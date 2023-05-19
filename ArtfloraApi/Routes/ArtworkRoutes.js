module.exports=((app)=>{
    const artworkcontrol=require("../Controller/ArtWorkController")
    app.post("/Addartwork",artworkcontrol.Addartwork)
    app.get("/Allartwork",artworkcontrol.Allartwork)
    app.post("/Artworkbyartistid",artworkcontrol.Artworkbyartistid)
    app.post("/Artworkbytype",artworkcontrol.Artworkbytype)
    app.post("/Artworkbyid",artworkcontrol.Artworkbyid)
    app.post("/Artworkbyframesize",artworkcontrol.Artworkbyframesize)
    app.post("/Artworkbycanvastype",artworkcontrol.Artworkbycanvastype)
    app.post("/ArtworkUpdateprice",artworkcontrol.Updateartworkprice)
    app.post("/Artworkdeletebyid",artworkcontrol.Deletebyidartwork)
    app.post("/Artworkbybetnprice",artworkcontrol.Artworkbetnpricerange)
})