<template>
    <div>
        <nav class="navbar navbar-expand-md navbar-light bg-white shadow-sm">
            <div class="container">
                <router-link :to="{ name: 'home' }" class="navbar-brand"
                    >Laravue</router-link
                >
                <button
                    class="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div
                    class="collapse navbar-collapse"
                    id="navbarSupportedContent"
                >
                    <!-- Left Side Of Navbar -->
                    <ul class="navbar-nav mr-auto"></ul>

                    <!-- Right Side Of Navbar -->
                    <ul class="navbar-nav ml-auto" v-if="! user.authenticated">
                        <li class="nav-item">
                            <router-link
                                :to="{ name: 'login' }"
                                class="nav-link"
                                >Login</router-link
                            >
                        </li>
                        <li class="nav-item">
                            <router-link
                                :to="{ name: 'register' }"
                                class="nav-link"
                                >Register</router-link
                            >
                        </li>
                    </ul>

                    <ul class="navbar-nav ml-auto" v-if="user.authenticated">
                        <li class="nav-item dropdown">
                            <a
                                id="navbarDropdown"
                                class="nav-link dropdown-toggle"
                                role="button"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                            >
                            <!-- Firman -->
                                {{ user.data.name }}
                                <span class="caret"></span>
                            </a>

                            <div
                                class="dropdown-menu dropdown-menu-right"
                                aria-labelledby="navbarDropdown"
                            >
                                <router-link :to="{ name: 'profile' }">Profile</router-link>
                                <a class="dropdown-item" href="#" @click.prevent="signout">Logout</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default  {
    computed:{
        ...mapGetters({
            user:"auth/user"
        })
    }
}
</script>
