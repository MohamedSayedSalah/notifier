module Delayed
  module Plugins
    class JobCreatedPlugin < Plugin
      attr_accessor :job
      callbacks do |lifecycle|
        lifecycle.after(:enqueue) do |job|
          p "job has been enqueue"
          Message.last.update delayed_job_id:   job.id
          # do something here
        end
      end
    end
  end
end