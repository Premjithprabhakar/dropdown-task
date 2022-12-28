import React,{useState,useEffect} from 'react'
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';
function Table() {
  
  const [item, setItem] = useState([])
  const [firstmenu, setfirstmenu] = useState([])
  const [secondmenu, setsecondmenu] = useState([])

  const getProduct = async () => {
    await fetch('/db.json')
      .then((data) => {
        data.json()
          .then((result) => {
            setItem(result.items)
          })

      })
  }

  function getId(sId) {

    let sub = item.find(listitem => listitem.id == sId)

    setfirstmenu(sub.submenu)
    
  }
  function getId2(subId) {
    let sub = firstmenu.find(sitem => sitem.id == subId

    )

    setsecondmenu(sub.submenu2)
  }

  useEffect(() => {
    getProduct()


  }, [])
  
  
  return (



<Form className='form-control container mt-5' >
  <div className="App  row">
        <div className="col-4">
  
  
          <ul id="menu">
            <li className="parent "><a href=""> <b>SHOP BY CATEGORY</b><i class="fa-regular fa-caret-down"></i></a>
              <ul className='child mt-2 '>
                {
                  item && item.map(data => (
  
                    <>
                      <li id='one' onMouseOver={() => getId(data.id)} className="parent"><a href="#">{data.title} <span className="expand"></span></a>
  
                        <ul className="child mt-2 ">
                          {
                            firstmenu && firstmenu.map(data => (
  
                              <>
                                <li onMouseOver={() => getId2(data.id)} className="parent"><a href="#">{data.name}<span className="expand"></span></a>
                                  <ul className="child mt-2">
                                    {
                                     secondmenu && secondmenu.map(data => (
  
                                        <>
                                          <li className="parent"><a href="#">{data.value}<span className="expand"></span></a></li>
  
  
  
  
                                        </>
  
                                      )
  
  
                                      )
                                    }
  
                                  </ul>
                                </li>
  
                              </>
  
                            )
  
                            )}
  
  
                        </ul>
                      </li>
                    </>
  
                  )
  
                  )}
  
              </ul>
            </li>
  
          </ul>
          </div>
        <div className='offer   col-8  '>
         <h2 className='mb-4'><i class="fa-solid fa-tag "></i> &nbsp;OFFER</h2>
        </div>
      </div>

</Form>
  )
}

export default Table