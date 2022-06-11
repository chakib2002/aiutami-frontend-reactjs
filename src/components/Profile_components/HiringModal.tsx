import { Fragment, useEffect, useRef, useState } from 'react'
import axios from "axios"
import { Dialog, Transition } from '@headlessui/react'
import { PaperAirplaneIcon} from '@heroicons/react/outline'
import { useSelector } from 'react-redux'
import {searchSeniorCaregiverState, searchHousekeeperState, searchTutorState, useAppDispatch} from "../../state/configureStore"
import { searchTutorFullName, searchTutorJobDescription, searchTutorPhoneNumber } from '../../state/Slices/searchTutorSlice'
import { searchSeniorCaregiverFullName, searchSeniorCaregiverJobDescription, searchSeniorCaregiverPhoneNumber } from '../../state/Slices/searchSeniorCaregiverSlice'
import { searchHousekeeperFullname, searchHousekeeperJobDescription, searchHousekeeperPhoneNumber } from '../../state/Slices/searchHousekeeperSlice'
import { HiringFeedbackModal } from './HiringFeedbackModal'


export const HiringModal = ({open, setOpen, firstname, lastname, careType, id} : {
  open:boolean,
  setOpen:Function,
  firstname : string | null,
  lastname? : string | null,
  careType? : string | null,
  id?:number | null
  }) => {
  

  const SeniorCaregiverSearchData = useSelector(searchSeniorCaregiverState)
  const HousekeeperSearchData = useSelector(searchHousekeeperState)
  const TutorSearchData = useSelector(searchTutorState)

  const dispatch = useAppDispatch()

  const cancelButtonRef = useRef(null)

  const [modalData, setModalData] = useState({
    fullname :"",
    phoneNumber :"",
    jobDescription :""
  })

  const [FeedbackModal, setFeedbackModel] = useState(false)
  const [requestStatus, setRequestStatus] = useState<boolean | null>(null)


  const HandleChanges = (event : React.FormEvent<HTMLInputElement | HTMLTextAreaElement>)=>{    
    const { name } = event.target as HTMLInputElement | HTMLTextAreaElement;
    
    if(name ==="fullname" && careType ==="Tutor"){
      dispatch(searchTutorFullName({text : event.currentTarget.value }))   
      setModalData({...modalData, 
        fullname : event.currentTarget.value
      })   
    }else if (name === "phoneNumber" && careType ==="Tutor"){
      dispatch(searchTutorPhoneNumber({text : event.currentTarget.value })) 
      setModalData({...modalData, 
        phoneNumber : event.currentTarget.value
      }) 
    }else if (name === "Job description" && careType ==="Tutor"){
      dispatch(searchTutorJobDescription({text : event.currentTarget.value })) 
      setModalData({...modalData, 
        jobDescription : event.currentTarget.value
      }) 
    }else if(name ==="fullname" && careType ==="Senior caregiver"){
      dispatch(searchSeniorCaregiverFullName ({text : event.currentTarget.value })) 
      setModalData({...modalData, 
        fullname : event.currentTarget.value
      }) 
    }else if (name === "phoneNumber" && careType ==="Senior caregiver"){
      dispatch(searchSeniorCaregiverPhoneNumber({text : event.currentTarget.value })) 
      setModalData({...modalData, 
        phoneNumber : event.currentTarget.value
      }) 
    }else if (name === "Job description" && careType ==="Senior caregiver"){
      dispatch(searchSeniorCaregiverJobDescription({text : event.currentTarget.value })) 
      setModalData({...modalData, 
        jobDescription : event.currentTarget.value
      }) 
    }else if(name ==="fullname" && careType ==="housekeeper"){
      dispatch(searchHousekeeperFullname({text : event.currentTarget.value }))
      setModalData({...modalData, 
        fullname : event.currentTarget.value
      }) 
    }else if (name === "phoneNumber" && careType ==="housekeeper"){
      dispatch(searchHousekeeperPhoneNumber({text : event.currentTarget.value }))
      setModalData({...modalData, 
        phoneNumber : event.currentTarget.value
      }) 
    }else if (name === "Job description" && careType ==="housekeeper"){
      dispatch(searchHousekeeperJobDescription({text : event.currentTarget.value }))
      setModalData({...modalData, 
        jobDescription : event.currentTarget.value
      }) 
    }else {
      console.log("A problem occured !")
    }

  }
  const sendRequestToFreelancer = ()=>{
    switch (careType) {
      case "Tutor":
        axios.post('http://localhost:3001/result/'+ id, {
          full_name : TutorSearchData.fullname,
          phone_number : TutorSearchData.phoneNumber,
          location :TutorSearchData.province,
          job_description : TutorSearchData.job_description
        }).then((res)=>{
          if(res.status === 200){
            console.log("request has been sent successfully")
            setRequestStatus(true)
            setFeedbackModel(true)
            
          }
        }).catch((err)=>{
          console.log("An error has occured ")
          setRequestStatus(false)
          setFeedbackModel(true)
        })
        
        break;
        case "housekeeper":
          axios.post('http://localhost:3001/result/'+ id, {
            full_name : HousekeeperSearchData.fullname,
            phone_number : HousekeeperSearchData.phoneNumber,
            location :HousekeeperSearchData.province,
            job_description : HousekeeperSearchData.job_description
          }).then((res)=>{
            if(res.status === 200){
              console.log("request has been sent successfully")
              setRequestStatus(true)
              setFeedbackModel(true)
            }
          }).catch((err)=>{
            console.log("An error has occured ")
            setRequestStatus(false)
            setFeedbackModel(true)
          })
        
        break;
          case "Senior caregiver":
            axios.post('http://localhost:3001/result/'+ id, {
              full_name : SeniorCaregiverSearchData.fullname,
              phone_number : SeniorCaregiverSearchData.phoneNumber,
              location :SeniorCaregiverSearchData.province,
              job_description : SeniorCaregiverSearchData.job_description
            }).then((res)=>{
              if(res.status === 200){
                console.log("request has been sent successfully")
                setRequestStatus(true)
                setFeedbackModel(true)
                
              }
            }).catch((err)=>{
              console.log("An error has occured ")
              setRequestStatus(false)
              setFeedbackModel(true)
            })
          break;
    
      default:
        break;
    }
  }
  
  
  useEffect(()=>{

    const SETMODALDATA = ()=> {
      switch (careType) {
        case "housekeeper":
          setModalData({
            fullname : HousekeeperSearchData.fullname,
            phoneNumber : HousekeeperSearchData.phoneNumber,
            jobDescription : HousekeeperSearchData.job_description
          })
          break;
          case "Tutor":
            setModalData({
              fullname : TutorSearchData.fullname,
              phoneNumber : TutorSearchData.phoneNumber,
              jobDescription : TutorSearchData.job_description
            })
          
            break;
            case "Senior caregiver":
              setModalData({
                fullname : SeniorCaregiverSearchData.fullname,
                phoneNumber : SeniorCaregiverSearchData.phoneNumber,
                jobDescription : SeniorCaregiverSearchData.job_description
              })
          
              break;
      
        default:
          break;
      }
    }
    
    SETMODALDATA()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={()=>{}}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed z-10 inset-0 overflow-y-auto">
            <div className="flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-lg sm:w-full">
                  <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                    <div className="sm:flex sm:items-start">
                      <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-lime-50 sm:mx-0 sm:h-10 sm:w-10">
                        <PaperAirplaneIcon className="h-6 w-6 text-hireNow" aria-hidden="true" />
                      </div>
                      <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                        <Dialog.Title as="h3" className="text-lg leading-6 font-semibold text-gray-900 ">
                          Hire {firstname} {lastname}
                        </Dialog.Title>
                        <div className="mt-2">
                          <p className="text-sm text-gray-500">
                            Please include your correct fullname and phone number, so that {firstname} {lastname} can get in touch with you  :) 
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className=' mx-5 md:mx-20'>
                    <div className='mb-2'>
                      <label htmlFor="fullname" className='text-sm font-semibold mb-1'>Fullname</label>
                      <input onChange={(event)=>{HandleChanges(event)}} name="fullname" value={modalData.fullname} type="text" className='block outline-none placeholder:text-sm w-ful text-sm text-gray-800 ' placeholder='Enter your name' id='fullname'></input>
                    </div>
                    <div className='mb-2'>
                      <label htmlFor="phone number" className='text-sm font-semibold mb-1'>Phone number</label>
                      <input onChange={(event)=>{HandleChanges(event)}} name='phoneNumber' value={modalData.phoneNumber} type="text" className='block outline-none placeholder:text-sm w-full text-sm text-gray-800 '  placeholder='example +21359486...' id='phone number'></input>
                    </div>
                    <div className='mb-2'>
                      <label htmlFor="Job description$" className='text-sm font-semibold mb-1'>Job description</label>
                    <textarea onChange={(event)=>{HandleChanges(event)}} name="Job description" value={modalData.jobDescription} className=' scrollbar-hide outline-none w-full border text-sm text-gray-700 border-gray-100 rounded-lg placeholder:text-sm placeholder:px-1 placeholder:py-1' placeholder={`please provide ${firstname} with all the job's details .`} id="Job description$" cols={30} rows={9}></textarea>
                    </div>
                  </div>
                  <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                    <button
                      type="button"
                      className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-hireNow text-base font-medium text-white hover:bg-darkgreen focus:outline-none sm:ml-3 sm:w-auto sm:text-sm"
                      onClick={() => {
                        setOpen(false)
                        sendRequestToFreelancer()
                      }}
                    >
                      Send a request
                    </button>
                    <button
                      type="button"
                      className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                      onClick={() => setOpen(false)}
                      ref={cancelButtonRef}
                    >
                      Cancel
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
      <HiringFeedbackModal succeed={requestStatus} open={FeedbackModal} setOpen={setFeedbackModel} />
    </>
  )
}
