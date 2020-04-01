<template>
  <layout title="Exam Seat Plan">
    <div class="router-header flex flex-wrap items-center mb-6">
      <div
        class="content-area__heading pr-4 border-0 md:border-r border-t-0 border-b-0 border-l-0 border-solid border-grey-light"
      >
        <h2 class="mb-1">Edit Exam Seat Plan</h2>
      </div>

      <!-- BREADCRUMB -->
      <vx-breadcrumb
        :links="
            [
                {
                title: 'Dashboard',
                url: route('admin.dashboard')
                },
                {
                title: 'Exam Seat Plan',
                url: route('admin.exam-seat-plans.index')
                },
                {
                title: 'Edit',
                active: true
                }
            ]"
      ></vx-breadcrumb>
      <!-- DROPDOWN -->
      <div class="ml-auto md:block hidden cursor-pointer">
        <inertia-link :href="route('admin.exam-seat-plans.index')">
          <vs-button color="danger" class="mb-2" icon="icon-arrow-left" icon-pack="feather">Back</vs-button>
        </inertia-link>
      </div>
    </div>
    <vx-card>
      <form @submit.prevent="store">
        <div class="vx-row">
          <vs-select
            class="w-full selectExample mb-2"
            label="Exam"
            placeholder="Select Exam"
            v-model="form.exam"
            :danger="!!$page.errors.exam"
            :danger-text="$page.errors.exam != null ? $page.errors.exam[0] : ''"
          >
            <vs-select-item
              :key="index"
              :value="item.id"
              :text="item.name"
              v-for="(item,index) in exams"
            />
          </vs-select>

          <vs-select
            class="w-full selectExample mb-2"
            label="Class"
            placeholder="Select class"
            v-model="academicClass"
            :danger="!!$page.errors.class"
            :danger-text="$page.errors.class != null ? $page.errors.class[0] : ''"
          >
            <vs-select-item
              :key="index"
              :value="item.id"
              :text="item.name"
              v-for="(item,index) in academicClasses"
            />
          </vs-select>

          <vs-select
            v-if="sections.length"
            class="w-full selectExample mb-2"
            label="section"
            placeholder="Select section"
            v-model="form.section"
            :danger="!!$page.errors.section"
            :danger-text="$page.errors.section != null ? $page.errors.section[0] : ''"
          >
            <vs-select-item
              :key="index"
              :value="item.id"
              :text="item.name"
              v-for="(item,index) in sections"
            />
          </vs-select>

          <vs-select
            class="w-full selectExample mb-2"
            label="Shift"
            placeholder="Select Shift"
            v-model="form.shift"
            :danger="!!$page.errors.shift"
            :danger-text="$page.errors.shift != null ? $page.errors.shift[0] : ''"
          >
            <vs-select-item
              :key="index"
              :value="item.id"
              :text="item.name"
              v-for="(item,index) in shifts"
            />
          </vs-select>

          <vs-select
            class="w-full selectExample mb-2"
            label="Group"
            placeholder="Select Group"
            v-model="form.group"
            :danger="!!$page.errors.group"
            :danger-text="$page.errors.group != null ? $page.errors.group[0] : ''"
          >
            <vs-select-item
              :key="index"
              :value="item.id"
              :text="item.name"
              v-for="(item,index) in groups"
            />
          </vs-select>
          <vs-input
            class="w-full mb-2"
            v-model="form.roll_start"
            label="Roll start"
            placeholder="Roll start"
            :danger="!!$page.errors.roll_start"
            :danger-text="$page.errors.roll_start != null ? $page.errors.roll_start[0] : ''"
          />
          <vs-input
            class="w-full mb-2"
            v-model="form.roll_end"
            label="Roll end"
            placeholder="Roll end"
            :danger="!!$page.errors.roll_end"
            :danger-text="$page.errors.roll_end != null ? $page.errors.roll_end[0] : ''"
          />
          <vs-input
            class="w-full mb-2"
            v-model="form.room_number"
            label="Room number"
            placeholder="Room number"
            :danger="!!$page.errors.room_number"
            :danger-text="$page.errors.room_number != null ? $page.errors.room_number[0] : ''"
          />
        </div>
        <div class="vx-row">
          <div class="vx-col w-full">
            <vs-button button="submit" class="mr-3 mb-2">Submit</vs-button>
            <vs-button color="warning" type="border" class="mb-2" @click="reset">Reset</vs-button>
          </div>
        </div>
      </form>
    </vx-card>
  </layout>
</template>

<script>
import Layout from "@/Shared/Layout";

export default {
  props: {
    seatPlan: Object,
    exams: Array,
    academicClasses: Array,
    shifts: Array,
    groups: Array
  },
  components: {
    Layout
  },
  watch: {
    academicClass: function(val) {
      let selectedClass = this.academicClasses.find(o => o.id == val);
      this.sections = selectedClass.sections;
      this.form.section = null;
    }
  },
  data() {
    return {
      academicClass: this.seatPlan.academic_class_id,
      sections: this.seatPlan.class.sections,
      form: {
        exam: this.seatPlan.exam_id,
        class: null,
        section: this.seatPlan.section_id,
        shift: this.seatPlan.shift_id,
        group: this.seatPlan.group_id,
        roll_start: this.seatPlan.roll_start,
        roll_end: this.seatPlan.roll_end,
        room_number: this.seatPlan.room_number
      }
    };
  },
  methods: {
    store() {
      this.$vs.loading();
      this.form.class = this.academicClass;
      this.$inertia
        .put(
          this.route("admin.exam-seat-plans.update", this.seatPlan.id),
          this.form,
          {
            preserveScroll: true,
            preserveState: true
          }
        )
        .then(() => this.$vs.loading.close());
    },
    reset() {
      this.$vs.loading();
      this.$inertia
        .visit(this.route("admin.exam-seat-plans.edit", this.seatPlans.id))
        .then(() => this.$vs.loading.close());
    }
  }
};
</script>
