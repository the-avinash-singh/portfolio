const host = "http://localhost:3000";

export const signinApi = async (user) => {
  try {
    const res = await fetch(`${host}/signin`, {
      method: "Post",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        name: user.name,
        email: user.email,
        phone: user.phone,
        work: user.work,
        password: user.password,
      }),
    });
    return res;
  } catch (err) {
    console.log(err);
  }
};

export const loginApi = async (user) => {
  try {
    const res = await fetch(`${host}/login`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        email: user.email,
        password: user.password,
      }),
    });
    return res;
  } catch (err) {
    console.log(err);
  }
};

export const aboutApi = async () => {
  try {
    const res = await fetch(`${host}/data`, {
      method: "get",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });
    return res.json();
  } catch (err) {
    console.log(err);
  }
};
export const idaboutApi = async (id) => {
  try {
    const res = await fetch(`${host}/data/${id}`, {
      method: "get",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });
    return res.json();
  } catch (err) {
    console.log(err);
  }
};

export const editAboutApi = async (user,id) => {
    try{
        const res=fetch(`/data/${id}`,{
            method:"put",
            headers:{
                "Content-Type": "application/json",
            },
            credentials: "include",
            body:{
                name:user.name,
                email:user.email ,
                phone: user.phone, 
                work: user.work,
                links: user.links,
                experiance: user.experiance,
                education: user.education,
                year: user.year,
                skills: user.skills,
                hobbies: user.hobbies,
            }
        })
    }catch(err){
        console.log(err)
    }
};

export const contactPostApi = async (user) => {
  try {
    const res = await fetch(`${host}/data`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: user.name,
        email: user.email,
        message: user.message,
      }),
      credentials: "include",
    });
    return res;
  } catch (err) {
    console.log(err);
  }
};
