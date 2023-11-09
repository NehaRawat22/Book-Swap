import React from 'react'
import './Register.css';
import img from '../../src/images/Logo4.png';

export default function Login() {
  return (
    <div>
      <section class="h-80 gradient-form" style="background-color: #eee">
      <div class="container py-5 h-80">
        <div class="row d-flex justify-content-center align-items-center h-80">
          <div class="col-xl-10">
            <div class="card rounded-3 text-black">
              <div class="row g-0">
                <div class="col-lg-6">
                  <div class="card-body p-md-5 mx-md-4">
                    <div class="text-center">
                      <img
                        src={img}
                        style="width: 165px"
                        alt="logo"
                      />
                      <h4 class="mt-1 mb-5 pb-1">
                        We Are The BookSwap Team!
                      </h4>
                    </div>

                    <form action="/login" method="POST">
                      <div class="form-outline mb-4">
                        <input
                          type="email"
                          id="form2Example11"
                          class="form-control"
                          placeholder="Please enter your email"
                          name="email"
                        />
                        <label class="form-label" for="form2Example11"
                          >Email</label
                        >
                      </div>

                      <div class="form-outline mb-4">
                        <input
                          type="password"
                          id="form2Example22"
                          class="form-control"
                          placeholder="Please enter your password"
                          name="password"
                        />
                        <label class="form-label" for="form2Example22"
                          >Password</label
                        >
                      </div>

                      <div class="text-center pt-1 mb-5 pb-1">
                        <button
                          class="btn btn-block fa-lg gradient-custom-2 mb-3"
                          type="submit"
                          style="color: #eee"
                        >
                          Log in
                        </button>
                      </div>

                      <div
                        class="d-flex align-items-center justify-content-center pb-4"
                      >
                        <p class="mb-0 me-2">Don't have an account?</p>
                        <button type="button" class="btn btn-outline-info">
                          <a href="/register"> Create new </a>
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
                <div
                  class="col-lg-6 d-flex align-items-center gradient-custom-2"
                >
                  <div class="text-white px-3 py-4 p-md-5 mx-md-4">
                    <h4 class="mb-4">WE ARE MORE THAN JUST A COMPANY....</h4>
                    <p class="small mb-0">
                      f you want to sell books online, BookScouter is one of the best platforms. When it was first launched, its main purpose was to help sell textbooks for the best price, but now, with 30+ vendors integrated into the platform, it helps find the best offers for buying and selling used books, too. 
                      BookScouter is unique from the other booksellers on this list because it helps connect you with vendors looking to buy the specific textbook you are selling.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}