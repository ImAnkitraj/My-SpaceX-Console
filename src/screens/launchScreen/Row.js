import React from 'react'
import axios from '../../axios'
import './Row.scss'

function Row({title,url}) {

    const [launchList,setLaunchList] = React.useState()
    React.useEffect(()=>{
        async function fetchData(){
            const data = await axios.get(url)
            setLaunchList(data.data)
            console.log(data.data)
        }
        fetchData()
    },[url])
    return (
        <div className='launch-row '>
            <div className='row-title'>
                <h1>{title}</h1>
            </div>
            <div className='row-body '>
                {
                    (title === 'Latest Launch' || title === 'Next Launch') && (
                        <div className='launch-card'>
                            <img src='' alt=''></img>
                            <div className='launch-info'>
                                <h2>{launchList?.name}</h2>
                                <h2>{launchList?.date_utc}</h2>
                                {
                                    launchList?.success? (<h2>Success</h2>):(<h2>{title !== 'Next Launch' || title === 'Upcoming Launch'? <>Failure</>:<></>}</h2>)
                                }

                            </div>
                        </div>
                    )
                }
                {   
                    (title === 'Past Launches' || title === 'Upcoming Launches') && (
                    
                    launchList?.map(launch => (
                        <div className='launch-card'>
                            <img src='' alt=''></img>
                            <div className='launch-info'>
                                <h2>{launch.name}</h2>
                                <h2>{launch.date_utc}</h2>
                            </div>
                        </div>
                    )))
                }
            </div>
        </div>
    )
}

export default Row
