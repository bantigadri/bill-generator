function fm(){
  
    if(document.getElementById("fm45").value=='Fornt Side Rooms 8'){
      return document.getElementById("form999").innerHTML=`
      
   <h1 class="reading">Reading Calculator</h1>
    <div class="reading"><table>
        <tr><th>R.No.</th2>
        <th>Paresent<br> Reading</th>
        <th>Past<br> Reading</th></tr>
        <tr>
            <td class="bant">1</td>
            <td><input type="text" id="p1" class="uc fcs"></td>
            <td><input type="text" id="pa1" class="uc fcs2 "></td>

        </tr>
        <tr>
            <td class="bant">2</td>
            <td><input type="text" id="p2" class="uc fcs"></td>
            <td><input type="text" id="pa2" class="uc fcs2"></td>

        </tr> 
        <tr>
            <td class="bant">3</td>
            <td><input type="text" id="p3" class="uc fcs"></td>
            <td><input type="text" id="pa3" class="uc fcs2"></td>

        </tr>
        <tr>
            <td class="bant">4</td>
            <td><input type="text" id="p4" class="uc fcs"></td>
            <td><input type="text" id="pa4" class="uc fcs2"></td>

        </tr>
        <tr>
            <td class="bant">5</td>
            <td><input type="text" id="p5" class="uc fcs"></td>
            <td><input type="text" id="pa5" class="uc fcs2"></td>

        </tr>
        <tr>
            <td class="bant">6</td>
            <td><input type="text" id="p6" class="uc fcs"></td>
            <td><input type="text" id="pa6" class="uc fcs2"></td>

        </tr>
        <tr>
            <td class="bant">7</td>
            <td><input type="text" id="p7" class="uc fcs"></td>
            <td><input type="text" id="pa7" class="uc fcs2"></td>

        </tr>
        <tr>
            <td class="bant">8</td>
            <td><input type="text" id="p8" class="uc fcs"></td>
            <td><input type="text" id="pa8" class="uc fcs2"></td>

        </tr>
    </table style="boder-collapse:collapse;"></div>
<div class="bill">
 <table class="tb2"><tr>
<td class="mtd">Total Bill</td>
<td><input type="text" id="totalbill" class="fcs2 "></td>
 </tr>
 
 <td class="mtd">Es.Sulkhe</td>
 <td><input type="text" id="slk" class="fcs2 "></td>
  </tr>
</table>
</div>
</div></div><br>
<div class="b1">
<button onclick="generatebill(),gn(),tiime()" class="button1 fcs2" id="bill">Generate Bill</button>
</div>
`
    }
  
    else if(document.getElementById("fm45").value=='Nora Rooms 7'){
      return document.getElementById("form999").innerHTML=`
      <div class="name">
      <form action="">
          <section>
      <label for="name">Full Name</label><br>
      <input type="text" placeholder="Enter Your Name" class="ip" id="name"><br><br>
      </section>
          <section>
      <label for="name">Your Class</label><br>
      <input type="text" placeholder="Enter Your Class" class="ip" id="class"><br><br>
      </section>
      <section>
          <label for="name">Your Address</label><br>
          <input type="text" placeholder="Enter Your Address" class="ip" id="yaddress"><br><br>
          </section>
          <section>
      <label for="name">Current date</label><br>
      <input type="date" placeholder="Enter Your Name" class="ip" id="date"><br><br>
      </section> 
          <section>
      <label for="name">School Name</label><br>
      <input type="text" placeholder="Enter Your School Name" class="ip" id="school"><br><br>
      </section>
      <section>
          <label for="name">School Address</label><br>
          <input type="text" placeholder="Enter Your School Address" class="ip" id="saddress"><br><br>
          </section>
         
      </form>
      <button onclick="generate(),gn()" class="b2">👉Generate Application👈</button>
      </div>`
    }
    else{ alert("Enter The Valid Format Choice Now ")}
  }
  