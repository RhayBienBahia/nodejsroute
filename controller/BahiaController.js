const m = {
    main:(req,res) =>{
        res.render('index');
    },
    about:(req, res) =>{
        res.render('about');
    },
    contact:(req, res) =>{
        res.render('contact');
    },
    products:(req, res) =>{
        res.render('products');
    },
    services:(req, res) =>{
        res.render('services');
    }
}

module.exports = m;