import Task from '../models/task.model';

import {Router} from 'express';

const taskRouter = Router();

taskRouter.get('/', async(_req,res) => {
    try {const task = await Task.find(); res.json(task);}
    catch(err) {res.status(400).json({message: err.message});
    }
});

taskRouter.post('/',async (req,res)=>{
    try{
        const task =new Task({
            header: req.body.header,
            description: req.body.description,
            dueDate: req.body.dueDate,
            status: req.body.status,
        });
        await task.save();
        res.json({ status:'Success',});
    }   catch (err){res.status(400).json({status: `${err.message}`});
    }
});

taskRouter.put ('/:id', async(req,res)=>{
    const{id} =req.params;
    const task ={
        header: req.body.header,
        description: req.body.description,
        dueDate: req.body.dueDate,
        status: req.body.status,};
    try{
        await Task.findByIdAndUpdate(id, {$set: task}, {new:true});
        res.json({status:'success put update'});
        }
        catch (err){res.status(400).json({status: `${err.message}`});
         }
});

taskRouter.get('/:id', async (req, res) =>{
    try{
        const task= await Task.findById(req.params.id);
        res.json(task);
    } catch (err) {res.status(400).json({
        status: `$err.message`,
    });
    }
});

taskRouter.delete('/', async(req,res) => {
    try {await Task.findByIdAndRemove(req.params.id);
    res.json({status:'del'});
    } catch(err) {res.status(400).json({message: err.message});
    }
});

taskRouter.patch('/:id', async(req,res)=>{
    const{id} = req.params;
    const task=req.body;
    try{
        await Task.findByIdAndUpdate(id, {$set: task}, {new:true});
        res.json({status:'del'});
    }catch(err) {res.status(400).json({message: err.message});
    }

});

export default taskRouter;
