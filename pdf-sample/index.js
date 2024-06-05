module.exports = ({
      name,
      email,
      phone,
      linkedin,
      github,
      skills,
      exp1_org,
      exp1_pos,
      exp1_desc,
      exp1_dur,
      exp2_org,
      exp2_pos,
      exp2_desc,
      exp2_dur,
      proj1_title,
      proj1_link,
      proj1_desc,
      proj2_title,
      proj2_link,
      proj2_desc,
      edu1_school,
      edu1_year,
      edu1_qualification,
      edu1_desc,
      edu2_school,
      edu2_year,
      edu2_qualification,
      edu2_desc,
      extra_1,
      extra_2,
    }) => {
      return `
      <!doctype html>
      <html>
          <head>
              <!-- Font Awesome -->
              <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.0/css/all.css">
              <!-- Bootstrap core CSS -->
              <link href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css" rel="stylesheet">
              <!-- Material Design Bootstrap -->
              <link href="https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.7.5/css/mdb.min.css" rel="stylesheet">
              <style>
                  body {
                      font-family: 'Garamond', serif;
                      background-color: #f4f4f4;
                      color: #333;
                      margin: 0; /* Ensure no default margin */
                      padding: 0; /* Ensure no default padding */
                  }
                  .container {
                      background-color: #fff;
                      padding: 40px;
                      box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
                      border-radius: 10px;
                      margin: 50px auto; /* Center the container and add margins on all sides */
                      max-width: 800px; /* Maximum width of the container */
                      box-sizing: border-box;
                  }
                  h1, h3 {
                      color: #6a0dad;
                      font-weight: bold;
                  }
                  .lead {
                      font-size: 1.1rem;
                  }
                  .section-title {
                      margin-top: 30px;
                      border-bottom: 2px solid #6a0dad;
                      padding-bottom: 10px;
                      margin-bottom: 20px;
                  }
                  .contact-info {
                    margin-bottom: 20px;
                }
                
                .contact-info p {
                    display: inline-block;
                    margin-right: 5px;
                    mergin-left:5 px
                    text-decoration: none;
                }
  
                  ul {
                      padding-left: 20px;
                  }
                  ul li {
                      margin-bottom: 10px;
                  }
                  .link {
                      color: #6a0dad;
                      text-decoration: none;
                  }
                  a{
                    text-decoration: none;
                  }
                  lead .a{
                    text-decoration: none;
                  }
                  .education {
                    margin-bottom: 20px;
                    position: relative; /* Ensure relative positioning for the year */
                }
                .education .year {
                    position: absolute;
                    right: 0;
                    top: 0;
                    font-weight: bold;
                }
                .education .qualification {
                    display: block; /* Ensure it starts on a new line */
                    margin-left: 0;
                    font-style: italic;
                    margin-top: 5px; /* Decrease this value to reduce the gap */
                }
                .experience{
                    margin-bottom: 10px;
                    position: relative;
                }
                .experience .yoo {
                    position: absolute;
                    right: 0;
                    top: 0;
                    font-weight: bold;
                    text-decoration: none;
                }
                
              </style>
          </head>
          <body>
              <div class="container">
                  <div class="text-center">
                      <h1>${name}</h1>
                      <div class="contact-info">
                      <p class="lead"><strong>Email:</strong> <a href="mailto:${email}" style={{}} class="link">${email}</a></p>
                          <p class="lead"><strong>Contact:</strong> (+91) ${phone}</p>
                          <p class="lead"><strong>LinkedIn:</strong> <a href="${linkedin}" class="link">${linkedin}</a></p>
                          <p class="lead"><strong>Github:</strong> <a href="${github}" class="link">${github}</a></p>
                      </div>
                  </div>
                  <div class="section-title">
                      <h3>Education</h3>
                  </div>
                  <div class="education">
                  <p class="lead"><b>${edu1_qualification}</b><span class="year">${edu1_year}</span></p>
                      <p class="qualification">${edu1_school}</p>
                      <p>${edu1_desc}</p>
                  </div>
                  <div class="education">
                      <p class="lead"><b>${edu2_qualification}</b> <span class="year">${edu2_year}</span></p>
                      <p class="qualification">${edu2_school}</p>
                      <p>${edu2_desc}</p>
                  </div>
                  <div class="section-title">
                      <h3>Skills</h3>
                  </div>
                  <p class="lead">${skills}</p>
                  <div class="section-title">
                      <h3>Experience</h3>
                  </div>
                  <div class="experience">
                      <p class="lead"><b>${exp1_org}, ${exp1_pos}</b> <span class="yoo">(${exp1_dur})</span></p>
                      <p>${exp1_desc}</p>
                  </div>
                  <div class="experience">
                      <p class="lead"><b>${exp2_org}, ${exp2_pos}</b> <span class="yoo">(${exp2_dur})</span></p>
                      <p>${exp2_desc}</p>
                  </div>
                  <div class="section-title">
                      <h3>Projects</h3>
                  </div>
                  <div class="experience">
                      <p class="lead"><b>${proj1_title}</b> <span class="yoo">(<a href="${proj1_link}" class="link">Link</a>)</span></p>
                      <p>${proj1_desc}</p>
                  </div>
                  <div class="experience">
                      <p class="lead"><b>${proj2_title}</b> <span class="yoo">(<a href="${proj2_link}" class="link">Link</a>)</span></p>
                      <p>${proj2_desc}</p>
                  </div>
                  <div class="section-title">
                      <h3>Extra-Curricular Activities</h3>
                  </div>
                  <ul>
                      <li><p class="lead"><b>Languages: </b>${extra_1}</p></li>
                      <li><p class="lead"><b>Hobbies: </b>${extra_2}</p></li>
                  </ul>
              </div>
              <!-- JQuery -->
              <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
              <!-- Bootstrap tooltips -->
              <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.4/umd/popper.min.js"></script>
              <!-- Bootstrap core JavaScript -->
              <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/js/bootstrap.min.js"></script>
              <!-- MDB core JavaScript -->
              <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.7.5/js/mdb.min.js"></script>
          </body>
      </html>
      
      
          ` ;
    };