const User= require('./User');

const saveConfig= require('./saveconfig');


saveConfig.hasOne(User,{
    foreignKey:'id',
    onDelete:'CASCADE'
})

User.belongsTo(saveConfig,{
    foreignKey:'id'
})

module.exports={User,saveConfig};