/**
 * NewsController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {  
    hotnews: hotnews
};

function hotnews(req,res){
    return res.view('news');
}
