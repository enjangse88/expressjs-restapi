const dbPool = require('../config/database');

const getAllUsers = () => {
  const SQLQuery = 'SELECT * FROM users';
  return dbPool.execute(SQLQuery);
     
    // Callback function -> disable -> because changed by query variable SQLQuery   
    /*
    dbPool.execute(SQLQuery, (err, rows) =>{
    if(err){
        res.json({message: 'connection failed'})
    }
    res.json({
        message: 'connection success',
        data: rows,
    })
    })*/

  
}

const createNewUsers = (body) => {
    /*if (!body || !body.name || !body.address) {
        throw new Error("Invalid user data. 'name' and 'address' are required.");
    }*/
    const SQLQuery = ` INSERT INTO users ( name, address)
                      VALUES ('${body.name}', '${body.address}') `;
  
    return dbPool.execute(SQLQuery);
}

const updateUsers = (body, idUser) => {
    const SQLQuery = `  UPDATE users 
                        SET name='${body.name}', address='${body.address}' 
                        WHERE id=${idUser}`;

    return dbPool.execute(SQLQuery);
}

const deleteUsers = (idUser) => {
    const SQLQuery = `Delete FROM users where id=${idUser}`;

    return dbPool.execute(SQLQuery);
}

module.exports = {
    getAllUsers,
    createNewUsers,
    updateUsers,
    deleteUsers,
}