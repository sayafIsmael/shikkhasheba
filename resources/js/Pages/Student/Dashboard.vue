<template>
  <layout title="Dashboard">
    <div class="router-header flex flex-wrap items-center">
      <div
        class="content-area__heading pr-4 border-0 md:border-r border-t-0 border-b-0 border-l-0 border-solid border-grey-light"
      >
        <h2 >Dashboard</h2>
      </div>

      <!-- BREADCRUMB -->
      <vx-breadcrumb
        :links="
            [
                {
                    title: 'Dashboard',
                    active: true
                },
            ]"
      ></vx-breadcrumb>
    </div>
    <div id="profile-page">
      <!-- COL AREA -->
      <div class="vx-row">
        <!-- COL 1 -->
        <div class="vx-col w-full lg:w-1/4">
          <vx-card class="mt-base">
            <img :src="settings.school_logo" alt="content-img" class="responsive rounded-lg" />
            <div class="my-6">
              <h5 class="text-center mb-2">{{ settings.school_name }}</h5>
            </div>
          </vx-card>

          <vx-card class="mt-base">
            <h3 class="mb-4">Hey,{{ $page.auth.user.name }} !!</h3>
            <h3>Welcome to your school dashboard.</h3>
          </vx-card>
        </div>

        <!-- COL 2 -->
        <div class="vx-col w-full lg:w-1/2">
          <vx-card class="mt-base">
            <!-- POST HEADER -->
            <div class="post-header flex justify-between mb-4">
              <div class="flex items-center">
                <vs-avatar
                  class="m-0"
                  :src="$page.auth.user.avatar_path"
                  :text="$page.auth.user.name"
                  size="45px"
                ></vs-avatar>
                <div class="ml-4">
                  <h6>{{ $page.auth.user.name }}</h6>
                </div>
              </div>
            </div>

            <!-- POST CONTENT -->
            <div class="post-content">
              <div>
                <vs-textarea
                  class="w-full mb-2"
                  :label="`What's on your mind, `+$page.auth.user.name"
                  v-model="form.content"
                />
                <span
                  v-if="!!$page.errors.content"
                  class="text-danger"
                >{{ $page.errors.content[0] }}</span>
              </div>
              <div>
                <file-pond
                  name="post_image"
                  ref="post_image"
                  label-idle="Drop your image here or <span class='filepond--label-action'>Browse</span>"
                  accepted-file-types="image/jpeg, image/png"
                  :files="getPostImage"
                  @addfile="addPostImage"
                  @removefile="removePostImage"
                />
                <span
                  v-if="!!$page.errors.post_image"
                  class="text-danger"
                >{{ $page.errors.post_image[0] }}</span>
              </div>
            </div>
            <template slot="footer">
              <vs-button
                icon-pack="feather"
                icon="icon-plus"
                class="w-full"
                @click="publishPost()"
              >Publish</vs-button>
            </template>
          </vx-card>
          <template v-if="posts.length">
            <vx-card class="mt-base" v-for="(post, index) in posts" :key="index">
              <!-- POST HEADER -->
              <div class="post-header flex justify-between mb-4">
                <div class="flex items-center">
                  <div>
                    <vs-avatar
                      class="m-0"
                      :src="post.user.avatar_path"
                      :text="post.user.name"
                      size="45px"
                    ></vs-avatar>
                  </div>
                  <div class="ml-4">
                    <h6>{{ post.user.name }}</h6>
                    <small>{{ post.updated_at | date(true) }} at {{ post.updated_at | time }}</small>
                  </div>
                </div>
                <div class="flex">
                  <vs-dropdown v-if="post.user.id == $page.auth.user.id">
                    <a class="flex items-center" href="#">
                      <feather-icon icon="MoreHorizontalIcon" svgClasses="w-6 h-6 text-grey"></feather-icon>
                    </a>
                    <vs-dropdown-menu>
                      <!-- <vs-dropdown-item>Edit</vs-dropdown-item> -->
                      <vs-dropdown-item class="text-danger" @click="postDestroy(post)">Delete</vs-dropdown-item>
                    </vs-dropdown-menu>
                  </vs-dropdown>
                </div>
              </div>

              <!-- POST CONTENT -->
              <div v-if="post.content" class="post-content">
                <p>{{ post.content }}</p>
              </div>
              <div v-if="post.image_path" class="post-media-container mb-6 mt-4">
                <ul class="flex post-media-list">
                  <li class="post-media m-1 w-full">
                    <img class="responsive rounded" :src="post.image_path" alt="user-upload" />
                  </li>
                </ul>
              </div>
            </vx-card>

            <!-- Last post message -->
            <vx-card class="mt-base">
              <!-- POST CONTENT -->
              <div class="post-content">
                <h3 class="text-center">It looks like you reach the end.</h3>
              </div>
              <div class="post-media-container mb-6 mt-4">
                <ul class="flex post-media-list">
                  <li class="post-media m-1 w-full">
                    <img
                      class="responsive rounded"
                      src="@assets/images/posts_end.svg"
                      alt="user-upload"
                    />
                  </li>
                </ul>
              </div>
            </vx-card>
          </template>
          <template v-else>
            <vx-card class="mt-base">
              <!-- POST CONTENT -->
              <div class="post-content">
                <h3 class="text-center">Sorry! No post found right now.</h3>
              </div>
              <div class="post-media-container mb-6 mt-4">
                <ul class="flex post-media-list">
                  <li class="post-media m-1 w-full">
                    <img
                      class="responsive rounded"
                      src="@assets/images/posts_end.svg"
                      alt="user-upload"
                    />
                  </li>
                </ul>
              </div>
            </vx-card>
          </template>
        </div>

        <!-- COL 3 -->
        <div class="vx-col w-full lg:w-1/4">
          <!-- LATEST PHOTOS -->
          <vx-card class="mt-base">
            <clock size="200px" color="#4AB7BD"></clock>
          </vx-card>

          <vx-card class="mt-base">
            <calendar ref="calendar" />
          </vx-card>
        </div>
      </div>
    </div>
  </layout>
</template>

<script>
import Clock from "vue-clock2";

import Layout from "@/Shared/Layout";
// Importing Component and style
import { Calendar } from "vue-sweet-calendar";
import "vue-sweet-calendar/dist/SweetCalendar.css";

export default {
  props: {
    settings: Object,
    posts: Array
  },
  components: {
    Clock,
    Layout,
    Calendar
  },
  data() {
    return {
      post: "",
      getPostImage: "",
      form: {
        content: "",
        image: ""
      },
      profileImage:
        "https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/avatar-s-11.1a620230.jpg",
      postImage: "http://wsg.com.gt/v6/uploads/news_images/932895c41d.jpg",
      suggestedPages: [
        { img: "page-09.jpg", title: "Rockose", type: "Company" },
        { img: "page-08.jpg", title: "The Devil's", type: "Clothing Store" },
        { img: "page-03.jpg", title: "The Magician", type: "Public Figure" },
        { img: "page-02.jpg", title: "AC/DC", type: "Music" },
        { img: "page-07.jpg", title: "eat hard", type: "restaurant / bar" },
        { img: "page-04.jpg", title: "B4B", type: "Beauty Store" },
        { img: "page-05.jpg", title: "Kylie Jenner", type: "Public Figure" },
        { img: "page-01.jpg", title: "RDJ", type: "Actor" },
        { img: "page-06.jpg", title: "Taylor Swift", type: "Music" }
      ],
      twitterFeeds: [
        {
          authorAvatar: "avatar-s-12.png",
          authorUsername: "tiana59",
          authorDisplayName: "Tiana Vercetti",
          content:
            "I love cookie chupa chups sweet tart apple pie chocolate bar. Jelly-o oat cake chupa chups.",
          tags: ["js", "vuejs"],
          time: "Mon Dec 12 2018 07:46:05 GMT+0000 (GMT)"
        },
        {
          authorAvatar: "avatar-s-12.png",
          authorUsername: "tiana59",
          authorDisplayName: "Tiana Vercetti",
          content:
            "Carrot cake cake gummies I love I love tiramisu. Biscuit marzipan cookie lemon drops.",
          tags: ["python"],
          time: "Mon Dec 11 2018 01:05:05 GMT+0000 (GMT)"
        },
        {
          authorAvatar: "avatar-s-12.png",
          authorUsername: "tiana59",
          authorDisplayName: "Tiana Vercetti",
          content:
            "I love cookie chupa chups sweet tart apple pie chocolate bar. Jelly-o oat cake chupa chups .",
          tags: [],
          time: "Mon Dec 10 2018 03:33:05 GMT+0000 (GMT)"
        },
        {
          authorAvatar: "avatar-s-12.png",
          authorUsername: "tiana59",
          authorDisplayName: "Tiana Vercetti",
          content:
            "Muffin candy caramels. I love caramels tiramisu jelly. Pie I love wafer. Chocolate cake lollipop tootsie roll cake.",
          tags: ["django", "vuejs"],
          time: "Mon Dec 9 2018 08:47:05 GMT+0000 (GMT)"
        }
      ],
      userPosts: [
        {
          author: "Leeanna Alvord",
          time: "Mon Dec 12 2018 07:46:05 GMT+0000 (GMT)",
          isLiked: true,
          text:
            "I love jujubes wafer pie ice cream tiramisu. Chocolate I love pastry pastry sesame snaps wafer. Pastry topping biscuit lollipop topping I love lemon drops sweet roll bonbon. Brownie donut icing.",
          media: [{ img: "2.jpg" }],
          likes: 145,
          comments: 77,
          usersLiked: [
            { name: "Trina Lynes", img: "avatar-s-1.png" },
            { name: "Lilian Nenez", img: "avatar-s-2.png" },
            { name: "Alberto Glotzbach", img: "avatar-s-3.png" },
            { name: "George Nordick", img: "avatar-s-4.png" },
            { name: "Vennie Mostowy", img: "avatar-s-5.png" }
          ],
          commentbox: "",
          usersCommented: [
            {
              comment: "orthoplumbate morningtide naphthaline exarteritis",
              author: "Kitty Allanson",
              img: "avatar-s-6.png",
              time: "Mon Dec 10 2018 08:56:05 GMT+0000 (GMT)"
            },
            {
              comment: "blockiness pandemy metaxylene speckle coppy",
              author: "Jeanie Bulgrin",
              img: "avatar-s-8.png",
              time: "Mon Dec 10 2018 08:55:00 GMT+0000 (GMT)"
            }
          ]
        },
        {
          author: "Leeanna Alvord",
          time: "Mon Dec 11 2018 08:05:05 GMT+0000 (GMT)",
          isLiked: false,
          text:
            "Candy jelly beans powder brownie biscuit. Jelly marzipan oat cake cake. Cupcake I love wafer cake. Halvah I love powder jelly I love cheesecake cotton candy tiramisu brownie.",
          media: [{ img: "25.jpg" }],
          likes: 276,
          comments: 105,
          usersLiked: [
            { name: "Lai Lewandowski", img: "avatar-s-6.png" },
            { name: "Elicia Rieske", img: "avatar-s-7.png" },
            { name: "Darcey Nooner", img: "avatar-s-8.png" },
            { name: "Julee Rossignol", img: "avatar-s-10.png" },
            { name: "Jeffrey Gerondale", img: "avatar-s-9.png" }
          ],
          commentbox: "",
          usersCommented: [
            {
              comment: "I love cupcake danish jujubes sweet.",
              author: "Darcey Nooner",
              img: "avatar-s-8.png",
              time: "Mon Dec 11 2018 09:56:05 GMT+0000 (GMT)"
            },
            {
              comment: "Wafer I love brownie jelly bonbon tart apple pie",
              author: "Lai Lewandowski",
              img: "avatar-s-6.png",
              time: "Mon Dec 10 2018 09:50:00 GMT+0000 (GMT)"
            }
          ]
        },
        {
          author: "Leeanna Alvord",
          time: "Mon Dec 10 2018 12:05:05 GMT+0000 (GMT)",
          isLiked: false,
          text:
            "Wafer I love brownie jelly bonbon tart. Candy jelly beans powder brownie biscuit. Jelly marzipan oat cake cake.",
          media: [
            {
              sources: [
                { type: "video/mp4", src: "http://vjs.zencdn.net/v/oceans.mp4" }
              ],
              poster: "https://goo.gl/xcCsDd"
            }
          ],
          likes: 269,
          comments: 98,
          usersLiked: [
            { name: "Vennie Mostowy", img: "avatar-s-5.png" },
            { name: "Elicia Rieske", img: "avatar-s-7.png" },
            { name: "Julee Rossignol", img: "avatar-s-10.png" },
            { name: "Darcey Nooner", img: "avatar-s-8.png" },
            { name: "Elicia Rieske", img: "avatar-s-7.png" }
          ],
          commentbox: "",
          usersCommented: [
            {
              comment: "I love cupcake danish jujubes sweet.",
              author: "Darcey Nooner",
              img: "avatar-s-8.png",
              time: "Mon Dec 11 2018 09:56:05 GMT+0000 (GMT)"
            },
            {
              comment: "Wafer I love brownie jelly bonbon tart apple pie",
              author: "Lai Lewandowski",
              img: "avatar-s-6.png",
              time: "Mon Dec 10 2018 09:50:00 GMT+0000 (GMT)"
            }
          ]
        }
      ]
    };
  },
  methods: {
    publishPost() {
      this.$inertia.post(this.route("student.posts.store"), this.form, {
        preserveScroll: false,
        preserveState: false
      });
    },
    reset() {
      this.$inertia.visit(this.route("student.dashboard"));
    },
    addPostImage() {
      this.form.image = this.$refs.post_image.getFile().getFileEncodeDataURL();
    },
    removePostImage() {
      this.form.image = "";
    },

    postDestroy(post) {
      this.post = post;
      this.$vs.dialog({
        type: "confirm",
        color: "danger",
        title: `Confirm`,
        text: "Are you sure? you want to delete this.",
        accept: this.acceptDelete
      });
    },
    acceptDelete() {
      this.$inertia.delete(this.route("student.posts.destroy", this.post.id), {
        preserveScroll: true,
        preserveState: true
      });
    },
    goToday() {
      this.$refs.calendar.goToday();
    }
  }
};
</script>

<style>
</style>
