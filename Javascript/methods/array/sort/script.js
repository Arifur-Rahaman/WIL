const tasks = [
    {name:'First task', status: 'other'},
    {name:'Second task', status: 'active'},
    {name:'Third task', status: 'completed'},
    {name:'Fourth task', status: 'pending'},
    {name:'Fifth task', status: 'other'}
]

const sortOrder = ["active", "pending", "completed", "other"]

const sortTask= (a, b)=>{
    const aIndex = sortOrder.indexOf(a.status)
    const bIndex = sortOrder.indexOf(b.status)

    if(aIndex === -1 && bIndex === -1){
        return 0
    }
    else if(aIndex === -1){
        return 1
    }
    else if(bIndex === -1){
        return 1
    }

    return aIndex - bIndex
}

const sortedTask = tasks.sort(sortTask)

console.log(sortedTask)