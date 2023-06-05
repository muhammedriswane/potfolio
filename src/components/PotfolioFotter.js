import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { deletpro } from '../store/Projectdataslice';
import { useDispatch } from 'react-redux';

const PotfolioFotter = () => {
  const dispatch=useDispatch()
  const selecter=useSelector(state=>state.prodata.value)
  console.log(selecter,'--------------======')
  console.log(selecter);

  return (
    <div className='footmaindiv'>
            <h1>PROJECTS</h1>
        <div className='footerdiv' >
            { selecter.map((val)=>{
              return(
                <div className='ml-5 mt-3'>
               <div class="card" style={{width:"18rem"}}>
                <img src={val.projectimage}></img>
                <div className="card-body">
                    <p>{val.id}</p><br/>
                    <h5 className="card-titl">{val.projectname}</h5><br/>
                    <h5 className="card-title">{val.projectdiscription}</h5><br/>


                    <button className="btn btn-danger" onClick={()=>{dispatch(deletpro(val.id))}} >delete</button>
                </div>
            </div>
        </div>
              )
               

            })}
           
            <div className='m-3'>
               <div className="card" style={{width:"16rem"}}>
                <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxIQEhUSERAWFhASFxAVFhgVFRAWFhYVFRgWFhUXGBgYHSggGBolGxgVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGxAQGy0mICUtKy0tLS8wLy0rLS8tLS0tLS0tLSstLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAOEA4QMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAAAQMCBAUGB//EAEYQAAIBAgQCBgUJBwIEBwAAAAECAAMRBBIhMQVBEyJRYXGRMoGhsdEGFSNCUmLB4fAUM2NykqLSB1OjssPxFzRDVHOCg//EABkBAQADAQEAAAAAAAAAAAAAAAABAgMEBf/EADIRAAICAQMCBAMHBAMAAAAAAAABAhEDEiExBEETUWHwcZGhBRQiMoHB0UKx4fEjUnL/2gAMAwEAAhEDEQA/APosSZE9M8YREQBERAEREAmREQBECDBIiIggRJkQBESRAIEGTIgkREQQTIiIAgSZEAmREQDKIiQWMYiTJKiIkQBERAJkREASZEmAReIiAIkyIAiIgCIiAIiIBMiIgCJMiAIiIAiIgGUREgsYxeIklRERAEREAREQBERAEREAREWgC0QTEEiIiCBERAJiIgCREQBERAEREAyiIkFjGIkySpEREASZNNbkAm3f2To4anQQgmpmI7tPKUlPSXhByOYYnXxz0qg0cBhzsfKcmTCWpcUTkhpdXZEmQBfaJYzEREAyQXPL17Sw0fvr5ymT0Z3sbeBkMlP0DrbmD4ayJIlt6fY3mvwjgVZTEuvT7G81+EwfL9W/rI/ARYr1MIiJJAiIgCIiAJMRAEiTIgGUREgsYxEmSVImahbG563L9W8ZUrgi4Nxr7JiKtlUtu2XTvPd5+UUSiyJM224bVH1b+BEhyS5ZKi5cI1FF9BBFtDvLHoumpUjvtKyb6mSnZFVzyTTqFTdSQddpWzAC5Nh96ZEzztb5QJWrV8IKbBqKFixy5TZqY05/XHlKylUZSXZWa4MfiZIQbpSklfxaW3buerw+HV6TVMw02tax2mvL+Bf+SP67JhhR11vtdfeJTFNyTb97WadThWPJ4a7Nq/g2rNmoyYZQWXNVbUA7Ca/z3Wvfq27LC3vvK+OE9M1/u28h+c4FSrX6TqqCneWUW8Qpnl9Z1ksMlFRi3p1NydKvJevuj0eh6H7zGb1uKi2klzslbfnd/wCT1iMmJUlVy1V1I7ZoSngr1hWGWnT2a/0rjS3/AMfbacahi+IHH1Eq0ETBhquVk617Dq9YsDr25e7vnp4HqimuHFSSbVq+x5eWLV3ym4v1rud+bmBwJqak2X2nwmpPRYC3RpbsHnz9snNNxWxPT41OW55Hj2MOGrCmACuVTc3zXN767cuyXYbELUUMux8wewzzn+qnFGwlemzUS1OqllYNbrITmUi29ip9fdK/kBxg4pahFIqqGmNTe7EG/LsA85lgWe9UlcX32/bc9TrYdA+mj4brKqtVLfs72q+99+Nz1i2vrtJqWucu3K/ZJp0y2igk9wvLKmFZRdyqL2uyqPaZ0NpPdniqMnwitEJ2t6yo95ln7M33f66fxldRMptpyNwbgg6gg8xMZPPA2XPv6EnSJvUOFsfSIUad5/KbmJ4apXqCzDbXfxmbzQTo1XT5Gro4kSXQqSDuJE1MDKIiQWMZDkgaAnuGW/tIEmDJINStWy62Klit9r3Jyi9iR2a+EUK2a+mYrccr8rgE/rSV8eqJTw1Ws5sKIV9BfXOoX+4ibnyUwyYnDJiEc5apqNquvpsDz7QZ4s8XUx63xXJ6L9dNV+WuLv8AXvfY9eEsEuj0KK1V6Xd83zX+jPDPqCykAEXBy3tfuJm5UweZiyYhdSTYNXpk37clUKT3lTL6nBz9VwT3i05tWmVJDCxE9RqOT8rPPTnh5ib9VaqUmFVrlmUL1w9gNd+jQ8uebxnPnXbhRa16mwAHV5ecx+Zf4n9v5yuPJCKqy+XHknK6+qOJiibCyFjfYFBy36xE8jQ4JiBjcTiDS+jroyoM9K4OakesM1gOodieU97i8G9PfVe0fj2TXloYoapzX9aSfwV1/cqs+THoX/R2vjae/wAivhWLanQ6FqFQMfrXoFRtvZ7+yWAzbTh5sGqMEUlQL73YhVHcSSB65c2Ap6gVNQwTUfWIBA79CIjPHDZMnJHLmk5yXNvy5d8GGJoDFKGUgVlFiDzE5/zVWvboz5rbzvNjE4Z6R19RG0j9sqbZ285SfTwyJalGSXGpXXwIWaUG95Rb5p1fxNnD0RhVJJBqsLAD6o/XunPIqXv0Z6Kx+kuts9wMuW99tb2tJa99d+d95LoQ+TMbZb87ehm2lOo6j7vob3c5Rj8/2XkXwYfH1KOyhGTX6fz5mrXFXOmQjo/r3393Zfa2vdOvgMf0fVYXXu3EqwOE6UkZrWtyvN35m/if2/nN8k4flkZY4ZPzQON8tuH0eI4U0M1qgKvTbLfI4594ILA+M0uA8Hp4OiKNLYasx3djux9ngAJ6b5m/if2/nOfi6HRsVve1tdt4xziloi9uSc0cj/FNGeDBZaiDVitwBuSuth1l3/mA7dJXR4aUbNZKYPpWbD037/QpFr2/iSzB4N3N10A5nt/Gb3zQDqahJO5sN5nk0qTtmmJz0bR+po8QZSwyEkBVFySSbd51PLWUUwL6nT9dxm3iuGsguOsO7ceqZ4XhvSKGz2vfS19jbtminBR52MnCcp8b8nPbu2idb5m/if2/nHzN/E/t/OPHh5kfdsnkcmJbiqPRsVve1tfEXlYmqd7mTTTpkxJkyLJorMREkqb3CaYZmVgCpBBBAIIJFwQd5Zj6hpMqUzlQBbKoAA1I0HLaRwT0z/L+InRxCUyeva9uZtp+rzlm0sltdjtxxcsNJ1uaPDca7OFY3Bv2aWk8dQdU89RNsPRTUFR4WJ9ms5GPxXStfZRoPjJgtWTUlSIyvTicZO2dnHuVpsQbEAe8TjDH1R9c+yd6sqlbNbLpe+0pp4WkdVUH2zPHOMVujXLjnKX4XRl+8p9Yektz5Tm8GoZiWP1bW8ZfxPGgAovpHQ9wmHCawWm9wTlN7KGY6gDQDU7SUpRxt+ZVuMssV5HP+mxFV6aP0aIQtWogJz1UsbUw4K0wLpmOrE3AN0LS2rwZ0u9DFVQ6m/XepXXNYDrJUJ0sWJCZGIIAI5x8nW6M4ikReqtfEtY6XFas9enrl2y1VG51VwB1TO1SXICWNyTmJA5mwsB5C28o21sjdK+Tk8KxXSqadRcrBnpun0lRlrDrsxc6BCroy3to429EajqVJHNSfMTc+TvWfE1FH0bVVRSMtmNJFVyLAaBsybf+nNbGNd2I2uZvh/M0cvUpaU+5XUcsSSbk7yyv+/8A/p/0pVJr1l/aMubrZNv/AMiZxfakW/BpcZInT9mW/G/8SOlwPdvAfjM+IPVD9TNlsNgSPdMOB7t4D8Zt4riAptlKk7HS065X4rpWc8K8FW6Ob0uI/if0n4SqmrVagDE3Jsb76bzpfPC/YPsmlgKo6YHkxb23tNE5U3prYykotpKV7nVxdcUU0HcomhhC9S7Go1726trDS9z3cpdxtCVU8gTf1z4VxHiDEYmvWxtWljqTtTp0Qw0pFw+QsgFwCW2P1BvpHT4dcbXPzNM2RrJXZdj7U/EnK5b682G5H4TXp4p1FlYgTTwNRnpozhQ7KpYKSVBIubE6kTaWmSCQNBa5mmmMexz65t8s7XCajMhLG5zHfwE5+JxdQOwDmwZvfN7gnoHxPuE5WM/eP4t75hBLxJKjfJJrFF2VVHLG5NyYkROk5DKIiCxjEmRBU6PBPTP8v4iRxv8AeD+Ue9pzwbbGSTfcymj8eo18T/j0GSUyQSNl3lZk3iXMnVHoeJ/um8B7xPKYn5SLg3VMj1atUHLRpAFyB9Y3ICqO0mbhc9p8zPPcDAOMxzN+9D0EF9xR6NWS3YCxc+MpjxJRcXub5M2qamtqOhxP5RVUAqYzh9XD0zYdKHo16ag7dIaZug77Eazq4PFZGDDUHe3MHsmvWAZWV9abAhgfRKkWIPdacX5DsTgaFySAGCk7mmHYUz/SFlljWivf1srPJctS5PT4jhqVbPSZldMiI1MjpQrNap0hqXFQdZm1BOhINzeY1OGVqhK1a9Q08+RhTUUSVyqb5sxOW4XVMpBuRzvrg22NjK8XjwgXpa1g5CrmbdjsBeY+C+z+hsupXdHSLJQTJTyhguT6O6oqKTkst7BgDbT4CY8LFPN19/q32v8AGaUS6xpRa8+5k8zclJ9ux3Twqne+tuzlNbiq01OYKvSkZc1hmC7HXw09c5y1mGgZgPEzEKTrYnzlFhbacndGn3iotY1V8+0dLge7eA/GbuI4elRsxJvpsR8J58MRsZPSHtPmZMsUnLUnRWGaKhpas7fzTT+95j4Tl46iKbkKTpYjt7ZR0h7T5mbNPCFk6RnsvgzHe2w13hJw3lIhtZNoR3OlhMYtUZXtm2IOx8Jp1PkzhmqCr0Y6RSxDZVuCwCsb2vqABryldGhTJy3q5m0BOHxCqDvcsVt5ma5qutxnbS43PKUjDd6HRrKbSXixv5HVxlGiiZTpzFt7zj3gmJtCGlc2c+Set3VHa4J6B/mPuE5eM/eP4t75UGI2JkGRGFScvMtPJcFGuCIiJoYmUREgsYxESSpscNqpnZCVz9GXAOW+UMAW10tc2vN3Ov2l88PPkn+pfEKuGxWGq0KjU6q03symx9LY8iO46TtcE/1gToW/a6LftCDq9EOrVPr9A9u47OyVyYJta4q7OrFONaW6PeYyvTWk7MyADoxe9PQuwVR1e0kD1zQnx/iHyvxPEsZQNZstIV6BSkhORfpFsT9tvvH1W2n2CWWJ41UuWZZZKT2MKdRWvlYGxINiDYjcG2x7px+N8Fr1WFfAkLjEFjmYBKlIG5VwQQe7a1951MNhUp3yAi9tyTtsBfYDsnTwvUpO/NuoPx/XdIlJx4K41b347njjwvG4pAmLr06dFgOkp4dGV3B3RqjMbDkcu89FRpKihVACqAqgaAACwA9UytEtdlWyCw0F9Tt323tMKgRrZspAbS9jZwbafevedTE4Oi1WlVZrNhswK2FiayhRm0mmODYZVSl0m2LasNFuavSNWNPb0bsR4CYeMkra9+6+Z0LpnJ1F2/fr6P5MqDA3sdRv3c9fVaTJ4lTpUKGOxFFgalalWrrcCytRoCmMum30YPjea3D8WteklVPRqKrjuzC9vVtNIy1dvf8AvYynDTVO/f8AG5t1FAtY3vv+v1tN3BYkU1UZ0D1CQoYqC1rCygsL6nlNCdjCLZUBvaxYnYbk7zPO6jua9Orm2vItaoT6VMH1E/8AKGlL06RBvTsQCd7bDsuD7JSlCkVvkUh3ucg0JAtmLLrfXe8txSgCqwLXsFt0lRl1IGiE2U6cpzwldVsdeSDj+b+370ciX5lZFUsBlLbrUa4NtsrqO3cGUTZwyUt6jnwAPvnZNJrc8/E2ntX6mFChRRhUA1Ug3Wlhx5sQWHqIMrqNmJPaSfOdpMbRVcoOnZZvhORilQHqNcG/Ii3dMsdW9qNc1tLdP4GNSmVNjNR6pBNjpNpELGwBJ85GK4YyJ0jW31A1sDzJ8Z5v2zkzQxx8JtNW212SXf58b/DY7fsvHinOXiJVsle+7f8Aj6muMQeyXCc04mmrrTaood/RUsAW7coO86kr9i5+ozRnLM21tVpet7rnt5/3J+1cOHE4rGqe91+lfDuRERPbPIMoiJBYiRBiSVPP/Kb5J0seyPUqOhpgqMmSxBN9bgzi/wDhjh//AHFb/hf4z3UmXWSS2TBRhfkNhFpUTTo0+lpin12RMzMoFnJA0a4vcc5fQ4fWZitiLbk7D4+qdrC4+mqKC2oAB0b4S35ypfa/tf4Tk8XKrVX8UdcsOGdSuvOnz79DnY3BLSRbElidSfA8uQmjedLieLR1AU3IN9iOXfObNMWrT+IxzaVKo8bGeTq3v6vL4+wyuImiMmdk03INgbHorWcDQDrWFtO/tmYpPfZrdIT6Y2tobW2+7OOMQ/2z/U0n9of7Z/qacsun1c19f5OyPVaeL+nm35epbxnB1amFq0wpzPQxadaopGZ1cJm013GvKeT+Q3D8RhsP0OIUAozZLMG6ja207GzeYnpTXc7ubfzGYTognFNPuYTmpUl74/gTv06J3FrBQo5m9reE4EKxGxt4SuTHrrcnFlULtcnoeiPVuNtTfx7poY64pm5brOPSAFrAnQTTTGVBs7es398V8S9QAMb27gPdMlhkpJ3savPDQ0k7ZTES1a5GnV/oQ+0idJyqiqSJY9YnQlfUqj2gSqEGelwyoFBQWU2P/eRjHRUY1WC0wrFyxAULbUknYWmjwbE6FCdtR4c/j5yeIY+mVanlDhgVYH0SCLEHt0nA8TctPJ6Uc0dClwedpYeg7jEU8rnKRTqDXqEk3UnYHtG825XhqC00WmgsiKqqOxVAAHkJaZ2whGC0xVJcLj6HnTm5ycpPciSJFpMsQZREStFrMIiTLFCIiIBKi+gGsz6BvsN5GYAyc57T5mCdu5DKRuCPHSa2IoOz02WqVVCxdQFIcEEAEnaxmwTEASZEQQSJt/NtTLmsO23O0jD47IBZFuOdjc+uX/O7/ZHt+Mzk5/0o2hHF/UzmyVtcX25+Eyr1MxvlA7htMJoZdzJgL6HTTU39fK9pZ0I/3F8qn+MpkyKF+hb0I/3F8qn+MdCP9xfKp/jKYivUm/QETXxWGZ2pstV0FNizKuS1QFSuVrgm2t/zsRsXiSQIiIIEREAlGsbjcSXa5uZjEE2TIiIIMoiJBYxiIklRJiIJIiIggREQBERAJiREARJkQBERAEREAREQCZERAESYMAiIiAIkyIBlERILGMREkqTIiIBMiIgCIkwCIiIAiIgCIkwBBiRBIiIggmREQBAiIBMiIgCJMiAIiIBlERILGMREkqIkyIAkyIvAJiJEAREQDn1ONUFc02ezD7r2NmKm1hrZhY25mYjjuH/3NNNlqG9xcbDe3LebbYKkSSaSEnUkohJPaTbWVDhlHMH6JcwGUaCwHht67SdiSr58oH0XLel6KtbRWe9yLWIVrdtpJ41RyswYnJ6QysCuoGtwMurDU6b9htsjBUgbikl+trkS/WFm5cxoZCYCkuYCktnAVhYZSozWXLtbrNp949sbA5mB+UtKoiuUdb1OiIAz2fKW3W9xYaEb3E2l47hza1W97EWWoSc3o6Ac5s4fAUqahEpIqKcwVUUAN9oADfvkVOHUW0NGmRcH0F5G/Z2ydgUYbjNGoHKvfozTBsCb9JbJYLe972ENxvDg2NTXX6lTYX19HbQ67aHsm02DpHQ0kIO90TX2dwgYOkL2pJrcnqJqTob6dkjYF8iTIkECIiAIiIAiJMAgRBMQDKIiCxbERMjQREQBERAEREAREQBERAEREARESQIiJAJkREAREQBERAEkxEAiIiSDKIiQSf/Z" className="card-img-top" alt="..." style={{height:"150px"}}></img>
                <div className="card-body">
                    <h5 className="card-title">New project</h5>
                    <Link to='/addingproject'>Add project</Link>
                </div>
            </div>
        </div>

    </div>
</div>
  )

}

export default PotfolioFotter