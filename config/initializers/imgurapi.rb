
module Imgurapi
  class Session
    def connection
      @connection ||= Faraday.new(
        HOST,
        headers: {'Authorization' => 'Bearer ' << ENV['IMGUR_ACCESS_TOKEN']},
        proxy: ENV['QUOTAGUARDSTATIC_URL']
      )
    end
  end
end
