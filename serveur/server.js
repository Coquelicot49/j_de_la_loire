const express = require('express');
const { createClient } = require('@supabase/supabase-js');
const dotenv = require('dotenv');
const cors = require('cors');

// Load environment variables
dotenv.config();

const app = express();
const port = process.env.PORT || 5005;

// Middleware
app.use(express.json());
app.use(cors());

// Initialize Supabase client
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);

// Signup route
app.post('/auth/signup', async (req, res) => {
  const { email, password } = req.body;

  try {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) throw error;

    res.status(201).json({
      message: 'Signup successful',
      user: data.user,
    });
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
});

// Login route
app.post('/auth/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) throw error;

    res.status(200).json({
      message: 'Login successful',
      user: data.user,
      session: data.session,
    });
  } catch (error) {
    res.status(401).json({
      error: error.message,
    });
  }
});


/////// pour que le user obtienne que les infos qui concerne uniquement
// Protected route example
app.get('/protected', async (req, res) => {
  const authHeader = req.headers.authorization;
  
  if (!authHeader) {
    return res.status(401).json({ error: 'No token provided' });
  }

  try {
    const token = authHeader.split(' ')[1];
    const { data: { user }, error } = await supabase.auth.getUser(token);

    if (error) throw error;


    // supabase
    //         .from('profiles')
    //         .select('*')
    //         .eq('user_id', user.id).then(({ data: soc_ag, error }) => {
    //             res.json(soc_ag);
    //         })

    res.json({
      message: 'Access granted',
      user,
    });
  } catch (error) {
    res.status(401).json({
      error: 'Invalid token',
    });
  }
});

app.get('/', (req, res) => { 
  // Handle your API logic here 
  console.log("test back")
  res.json({ message: 'Hello from Express!' });
}); 

app.get('/presents_soc_ag/:id_ag', (req, res) => { 
    supabase
            .from('presents_soc_ag')
            .select('*')
            .eq('id_ag', req.params.id_ag).then(({ data: soc_ag, error }) => {
                res.json(soc_ag);
            })
  }); 

app.listen(port, () => { 
  console.log(`Server is running on port ${port}`); 
});