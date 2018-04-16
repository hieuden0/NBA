/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    profile: profile,
    homepage: homepage
};

function profile(req,res){
    return res.json({
        'loc': 'be de',
        'gioitinh': 'bong'
    });
}
function homepage(req,res){
    return res.view('deptrai');
}